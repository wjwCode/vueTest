<template>
  <div>
    <div class="date-picker-title clearfix">
      <template v-for="item in date">
        <span class="float-left">{{item.name}}</span>
        <template v-for="item in item.dateTypeList">
          <span class="float-right">
            <input class="float-left" name="radio" type="radio" checked="checked" :id="item.dateTypeId" @click="dataQuery(item)">
            <label class="float-left">{{item.dateTypeName}}</label>
          </span>
        </template>
      </template>
    </div>
    <div class="date-picker" v-if="datePickerShow">
      <div class="calendar">
        <div class="calendar-tools">
            <span class="calendar-prev el-icon-caret-left" @click="prev">
            </span>
            <span class="calendar-next el-icon-caret-right"  @click="next">
            </span>
          <div class="calendar-info">
            <!-- {{monthString}} -->
            <div class="month">
              <div class="month-inner" :style="{'top':-(this.month*20)+'px'}">
                <span v-for="m in months">{{year}}年{{m}}月</span>
              </div>
            </div>
            <!--<div class="year">{{year}}</div>-->
          </div>
        </div>
        <table cellpadding="5">
          <thead>
          <tr>
            <td v-for="week in weeks" class="week">{{week}}</td>
          </tr>
          </thead>
          <tbody>
          <tr v-for="(day,k1) in days" style="{'animation-delay',(k1*30)+'ms'}">
            <td v-for="(child,k2) in day" :class="{'selected':child.selected,'disabled':child.disabled}" @click="select(k1,k2,$event)">
              <span :class="{'red':k2==0||k2==6||((child.isLunarFestival||child.isGregorianFestival) && lunar)}">{{child.day}}</span>
              <div class="text" v-if="child.eventName!=undefined">{{child.eventName}}</div>
              <div class="text" :class="{'isLunarFestival':child.isLunarFestival,'isGregorianFestival':child.isGregorianFestival}" v-if="lunar">{{child.lunar}}</div>
            </td>
          </tr>
          </tbody>
        </table>

        <div class="calendar-years" :class="{'show':yearsShow}">
          <span v-for="y in years" @click="selectYear(y)" :class="{'active':y==year}">{{y}}</span>
        </div>

      </div>
    </div>
    <div class="monthPicker" v-if="!datePickerShow">
      <span class="el-icon-arrow-left monthPickerArrow" @click="monthPickerLeft()"></span>
      <span class="year">{{year}}年{{month+1}}月</span>
      <span class="el-icon-arrow-right monthPickerArrow" @click="monthPickerRight()"></span>
    </div>
  </div>
</template>
<script>
import calendar from './calendar.js'
export default {
  props: {
    value: {
      type: Array,
      default: function () {
        return []
      }
    },
    begin: {
      type: Array,
      default: function () {
        return []
      }
    },
    end: {
      type: Array,
      default: function () {
        return []
      }
    },
    range: {
      type: Boolean,
      default: false
    },
    zero: {
      type: Boolean,
      default: false
    },
    lunar: {
      type: Boolean,
      default: false
    },
    weeks: {
      type: Array,
      default: function () {
        return window.navigator.language.toLowerCase() === 'zh-cn' ? ['日', '一', '二', '三', '四', '五', '六'] : ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      }
    },
    months: {
      type: Array,
      default: function () {
        return window.navigator.language.toLowerCase() === 'zh-cn' ? ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'] : ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      }
    },
    events: {
      type: Object,
      default: function () {
        return {}
      }
    }
  },
  data () {
    return {
      currentDate: 0,
      datePickerShow: true,
      years: [],
      yearsShow: false,
      year: 0,
      month: 0,
      day: 0,
      days: [],
      today: [],
      festival: {
        lunar: {
          '1-1': '春节',
          '1-15': '元宵节',
          '2-2': '龙头节',
          '5-5': '端午节',
          '7-7': '七夕节',
          '7-15': '中元节',
          '8-15': '中秋节',
          '9-9': '重阳节',
          '10-1': '寒衣节',
          '10-15': '下元节',
          '12-8': '腊八节',
          '12-23': '祭灶节'
        },
        gregorian: {
          '1-1': '元旦',
          '2-14': '情人节',
          '3-8': '妇女节',
          '3-12': '植树节',
          '4-5': '清明节',
          '5-1': '劳动节',
          '5-4': '青年节',
          '6-1': '儿童节',
          '7-1': '建党节',
          '8-1': '建军节',
          '9-10': '教师节',
          '10-1': '国庆节',
          '12-24': '平安夜',
          '12-25': '圣诞节'
        }
      },
      rangeBegin: [],
      rangeEnd: [],
      date: [
        {
          name: '时间',
          dateTypeList: [
            {dateTypeId: '1', dateTypeName: '按月'},
            {dateTypeId: '2', dateTypeName: '按日'}
          ]
        }
      ]
    }
  },
  mounted () {
    this.init()
  },
  methods: {
    // 初始化一些东西
    init () {
      let now = new Date()
      // 没有默认值
      this.year = now.getFullYear()
      this.month = now.getMonth()
      this.day = now.getDate()
      if (this.value.length > 0) {
        if (this.range) {
          this.year = parseInt(this.value[0][0])
          this.month = parseInt(this.value[0][1]) - 1
          this.day = parseInt(this.value[0][2])

          let year2 = parseInt(this.value[1][0])
          let month2 = parseInt(this.value[1][1]) - 1
          let day2 = parseInt(this.value[1][2])

          this.rangeBegin = [this.year, this.month, this.day]
          this.rangeEnd = [year2, month2, day2]
          // console.log(this.month,this.rangeBegin,this.rangeEnd)
        } else {
          this.year = parseInt(this.value[0])
          this.month = parseInt(this.value[1]) - 1
          this.day = parseInt(this.value[2])
        }
      }
      this.render(this.year, this.month)
      // 向父组件传递日期
      this.currentDate = this.year + '-' + (this.month + 1) + '-' + this.day
      this.$emit('listenToChildEvent', this.currentDate)
    },
    // 渲染日期
    render (y, m) {
      let firstDayOfMonth = new Date(y, m, 1).getDay()         // 当月第一天
      let lastDateOfMonth = new Date(y, m + 1, 0).getDate()    // 当月最后一天
      let lastDayOfLastMonth = new Date(y, m, 0).getDate()     // 最后一月的最后一天
      this.year = y
      let seletSplit = this.value
      let i
      let line = 0
      let temp = []
      let nextMonthPushDays = 1
      for (i = 1; i <= lastDateOfMonth; i++) {
        let day = new Date(y, m, i).getDay() // 返回星期几（0～6）
        let k
        // 第一行
        if (day === 0) {
          temp[line] = []
        } else if (i === 1) {
          temp[line] = []
          k = lastDayOfLastMonth - firstDayOfMonth + 1
          for (let j = 0; j < firstDayOfMonth; j++) {
            // console.log("第一行",lunarYear,lunarMonth,lunarValue,lunarInfo)
            temp[line].push(Object.assign(
              {day: k, disabled: true},
              this.getLunarInfo(this.computedPrevYear(), this.computedPrevMonth(true), k),
              this.getEvents(this.computedPrevYear(), this.computedPrevMonth(true), k),
            ))
            k++
          }
        }

        // 范围
        if (this.range) {
          // console.log("日期范围",this.getLunarInfo(this.year,this.month+1,i))
          let options = Object.assign(
            {day: i},
            this.getLunarInfo(this.year, this.month + 1, i),
            this.getEvents(this.year, this.month + 1, i),
          )
          if (this.rangeBegin.length > 0) {
            let beginTime = Number(new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2]))
            let endTime = Number(new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]))
            let stepTime = Number(new Date(this.year, this.month, i))
            if (beginTime <= stepTime && endTime >= stepTime) {
              options.selected = true
            }
          }
          if (this.begin.length > 0) {
            let beginTime = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])))
            if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
          }
          if (this.end.length > 0) {
            let endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])))
            if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
          }
          temp[line].push(options)
        } else {
          // console.log(this.lunar(this.year,this.month,i));
          // 单选模式
          let chk = new Date()
          let chkY = chk.getFullYear()
          let chkM = chk.getMonth()
          // 匹配上次选中的日期
          if (parseInt(seletSplit[0]) === this.year && parseInt(seletSplit[1]) - 1 === this.month && parseInt(seletSplit[2]) === i) {
            // console.log("匹配上次选中的日期",lunarYear,lunarMonth,lunarValue,lunarInfo)
            temp[line].push(Object.assign(
              {day: i, selected: true},
              this.getLunarInfo(this.year, this.month + 1, i),
              this.getEvents(this.year, this.month + 1, i),
            ))
            this.today = [line, temp[line].length - 1]
          } else if (chkY === this.year && chkM === this.month && i === this.day && this.value === '') {
            // 没有默认值的时候显示选中今天日期
            // console.log("今天",lunarYear,lunarMonth,lunarValue,lunarInfo)
            temp[line].push(Object.assign(
              {day: i, selected: true},
              this.getLunarInfo(this.year, this.month + 1, i),
              this.getEvents(this.year, this.month + 1, i),
            ))
            this.today = [line, temp[line].length - 1]
          } else {
            // 普通日期
            // console.log("设置可选范围",i,lunarYear,lunarMonth,lunarValue,lunarInfo)
            let options = Object.assign(
              {day: i, selected: false},
              this.getLunarInfo(this.year, this.month + 1, i),
              this.getEvents(this.year, this.month + 1, i),
            )
            if (this.begin.length > 0) {
              let beginTime = Number(new Date(parseInt(this.begin[0]), parseInt(this.begin[1]) - 1, parseInt(this.begin[2])))
              if (beginTime > Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            if (this.end.length > 0) {
              let endTime = Number(new Date(parseInt(this.end[0]), parseInt(this.end[1]) - 1, parseInt(this.end[2])))
              if (endTime < Number(new Date(this.year, this.month, i))) options.disabled = true
            }
            temp[line].push(options)
          }
        }
        // 最后一行
        if (day === 6 && line < 4) {
          line++
        } else if (i === lastDateOfMonth) {
          // line++
          let k = 1
          for (let d = day; d < 6; d++) {
            // console.log(this.computedNextYear()+"-"+this.computedNextMonth(true)+"-"+k)
            temp[line].push(Object.assign(
              {day: k, disabled: true},
              this.getLunarInfo(this.computedNextYear(), this.computedNextMonth(true), k),
              this.getEvents(this.computedNextYear(), this.computedNextMonth(true), k),
            ))
            k++
          }
          nextMonthPushDays = k
        }
      } // end for

      // console.log(this.year+"/"+this.month+"/"+this.day+":"+line)
      // 补充第六行让视觉稳定
      if (line < 5 && nextMonthPushDays > 0) {
        line++
        temp[line] = []
        for (let d = nextMonthPushDays; d <= nextMonthPushDays + 6; d++) {
          temp[line].push(Object.assign(
            {day: d, disabled: true},
            this.getLunarInfo(this.computedNextYear(), this.computedNextMonth(true), d),
            this.getEvents(this.computedNextYear(), this.computedNextMonth(true), d),
          ))
        }
      }
      this.days = temp
    },
    computedPrevYear () {
      let value = this.year
      if (this.month - 1 < 0) {
        value--
      }
      return value
    },
    computedPrevMonth (isString) {
      let value = this.month
      if (this.month - 1 < 0) {
        value = 11
      } else {
        value--
      }
      // 用于显示目的（一般月份是从0开始的）
      if (isString) {
        return value + 1
      }
      return value
    },
    computedNextYear () {
      let value = this.year
      if (this.month + 1 > 11) {
        value++
      }
      return value
    },
    computedNextMonth (isString) {
      let value = this.month
      if (this.month + 1 > 11) {
        value = 0
      } else {
        value++
      }
      // 用于显示目的（一般月份是从0开始的）
      if (isString) {
        return value + 1
      }
      return value
    },
    // 获取农历信息
    getLunarInfo (y, m, d) {
      let lunarInfo = calendar.solar2lunar(y, m, d)
      let lunarValue = lunarInfo.IDayCn
      // console.log(lunarInfo)
      let isLunarFestival = false
      let isGregorianFestival = false
      if (this.festival.lunar[lunarInfo.lMonth + '-' + lunarInfo.lDay] !== undefined) {
        lunarValue = this.festival.lunar[lunarInfo.lMonth + '-' + lunarInfo.lDay]
        isLunarFestival = true
      } else if (this.festival.gregorian[m + '-' + d] !== undefined) {
        lunarValue = this.festival.gregorian[m + '-' + d]
        isGregorianFestival = true
      }
      return {
        lunar: lunarValue,
        isLunarFestival: isLunarFestival,
        isGregorianFestival: isGregorianFestival
      }
    },
    // 获取自定义事件
    getEvents (y, m, d) {
      if (Object.keys(this.events).length === 0) return false
      if (this.events[y + '-' + m + '-' + d] !== undefined) {
        return {
          eventName: this.events[y + '-' + m + '-' + d]
        }
      }
      return {}
    },
    // 上月
    prev (e) {
      e.stopPropagation()
      if (this.month === 0) {
        this.month = 11
        this.year = parseInt(this.year) - 1
      } else {
        this.month = parseInt(this.month) - 1
      }
      this.render(this.year, this.month)
    },
    //  下月
    next (e) {
      e.stopPropagation()
      if (this.month === 11) {
        this.month = 0
        this.year = parseInt(this.year) + 1
      } else {
        this.month = parseInt(this.month) + 1
      }
      this.render(this.year, this.month)
    },
    // 选中日期
    select (k1, k2, e) {
      let target = e.target || e.srcElement
      let day = target.innerText
      this.currentDate = this.year + '-' + (this.month + 1) + '-' + day
      this.$emit('listenToChildEvent', this.currentDate)
      if (e !== undefined) e.stopPropagation()
      // 日期范围
      if (this.range) {
        if (this.rangeBegin.length === 0 || this.rangeEndTemp !== 0) {
          this.rangeBegin = [this.year, this.month, this.days[k1][k2].day]
          this.rangeBeginTemp = this.rangeBegin
          this.rangeEnd = [this.year, this.month, this.days[k1][k2].day]
          this.rangeEndTemp = 0
        } else {
          this.rangeEnd = [this.year, this.month, this.days[k1][k2].day]
          this.rangeEndTemp = 1
          // 判断结束日期小于开始日期则自动颠倒过来
          if (+new Date(this.rangeEnd[0], this.rangeEnd[1], this.rangeEnd[2]) < +new Date(this.rangeBegin[0], this.rangeBegin[1], this.rangeBegin[2])) {
            this.rangeBegin = this.rangeEnd
            this.rangeEnd = this.rangeBeginTemp
          }
          // 小于10左边打补丁
          let begin = []
          let end = []
          if (this.zero) {
            this.rangeBegin.forEach((v, k) => {
              if (k === 1) v = v + 1
              begin.push(this.zeroPad(v))
            })
            this.rangeEnd.forEach((v, k) => {
              if (k === 1) v = v + 1
              end.push(this.zeroPad(v))
            })
          } else {
            begin = this.rangeBegin
            end = this.rangeEnd
          }
          // console.log("选中日期",begin,end)
          this.$emit('select', begin, end)
        }
        this.render(this.year, this.month)
      } else {
        // 取消上次选中
        if (this.today.length > 0) {
          this.days.forEach(v => {
            v.forEach(vv => {
              vv.selected = false
            })
          })
        }
        // 设置当前选中天
        this.days[k1][k2].selected = true
        this.day = this.days[k1][k2].day
        this.today = [k1, k2]
        this.$emit('select', [this.year, this.zero ? this.zeroPad(this.month + 1) : this.month + 1, this.zero ? this.zeroPad(this.days[k1][k2].day) : this.days[k1][k2].day])
      }
    },
    selectYear (value) {
      this.yearsShow = false
      this.year = value
    },
    // 日期补零
    zeroPad (n) {
      return String(n < 10 ? '0' + n : n)
    },
    dataQuery () {
      let radios = document.getElementsByName('radio')
      if (radios[0].checked) {
        this.datePickerShow = false
        // 按月筛选时向父组件传日期
        this.currentDate = this.year + '-' + (this.month + 1)
        this.$emit('listenToChildEvent', this.currentDate)
      } else {
        // 按日筛选时向父组件传日期
        this.currentDate = this.year + '-' + (this.month + 1) + '-' + this.day
        this.$emit('listenToChildEvent', this.currentDate)
        this.datePickerShow = true
      }
    },
    monthPickerLeft () {
      this.month--
      if (this.month < 1) {
        this.year--
        this.month = 12
      }
      this.currentDate = this.year + '-' + (this.month + 1)
      this.$emit('listenToChildEvent', this.currentDate)
    },
    monthPickerRight () {
      this.month++
      if (this.month > 12) {
        this.year++
        this.month = 1
      }
      this.currentDate = this.year + '-' + (this.month + 1)
      this.$emit('listenToChildEvent', this.currentDate)
    }
  }
}

</script>

<style scoped>
  .clearfix:after {
    content: '';
    display: block;
    height: 0;
    clear: both;
    visibility: hidden;
  }
  .float-left {
    float: left;
  }

  .float-right {
    float: right;
  }
  input[type="radio"] {
    vertical-align: bottom;
    margin-top: 10px;
    margin-right: -5px;
    margin-left: 25px;
  }

  .date-picker {
    padding: 8px 80px 0 70px;
  }
  .monthPicker{
    height: 179px;
    line-height: 179px;
    text-align: center;
  }
  .monthPickerArrow{
    font-size: 20px;
    color: #7a7a7a;
    font-weight: 900;
  }
  .year{
    font-size: 20px;
    background-color: #FFF;
    color: #000;
  }
  .date-picker-title {
    text-indent: 10px;
    line-height: 32px;
    padding-right: 18px;
  }
.calendar {
    margin:auto;
    width: 100%;
    background: #fff;
    font-family: "PingFang SC","Hiragino Sans GB","STHeiti","Microsoft YaHei","WenQuanYi Micro Hei",sans-serif;
    user-select:none;
}

.calendar-tools{
    font-size: 20px;
    color:#5e7a88;
}
.calendar-tools span{
    cursor: pointer;
}
.calendar-prev{
    width: 14.28571429%;
    float: left;
    text-align: center;
    font-size: 8px;
    color: #000;
  line-height: 20px;
}
.calendar-info{
    line-height: 1.3;
    text-align: center;
}
.calendar-info>div.month{
    font-size: 13px;
    margin:auto;
    height:20px;
    min-width:20px;
    text-align: center;
    color:#5e7a88;
    overflow: hidden;
    position: relative;
}
.calendar-info>div.month .month-inner{
    position: absolute;
    left:50%;
    transform: translateX(-50%);
    top:0;
    height:120px;
    transition:top .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    color: #000;
}
.calendar-info>div.month .month-inner>span{
    display: block;
    height:20px;
    margin: 0 auto;
    text-align: center;
    line-height: 20px;
  min-width: 100px;
}
.calendar-info>div.year{
  font-size: 13px;
   line-height: 1;
   color:#000;
}
.calendar-next{
    width: 14.28571429%;
    float:right;
    text-align: center;
    font-size: 8px;
    color: #000;
  line-height: 20px;
}

.calendar table {
    clear: both;
    width: 100%;
    border-collapse: collapse;
    color: #000;
}
.calendar table thead{
  border-bottom: 1px solid #F5F5F5;
}
.calendar td {
    margin:2px !important;
    padding:0px 0;
    width: 14.28571429%;
    height:20px;
    text-align: center;
    vertical-align: middle;
    font-size:10px;
    line-height:100%;
    cursor: pointer;
    position: relative;
    vertical-align: top;
}
.calendar td.week{
    font-size:10px;
    pointer-events:none !important;
    cursor: default !important;
}
.calendar td.disabled {
    color: #868695;
    pointer-events:none !important;
    cursor: default !important;
}

.calendar td.disabled div{
    color: #ccc;
}
.calendar td span{
    display:block;
    max-width:22px;
    height:16px;
    font-size: 12px;
    line-height:16px;
    margin:0px auto;
}
.calendar td:not(.selected) span:not(.red):hover{
  background-color: #DDEEFF;
  color: #5CC5FE;
  border: 1px solid #87BCF0;
}
.calendar td:not(.selected) span.red:hover{
  background-color: #DDEEFF;
}
.calendar td.selected span{
  background-color: #DDEEFF;
  color: #5CC5FE;
  border: 1px solid #87BCF0;
}
.calendar td .text{
    position: absolute;
    top:28px;
    left:0;
    width:40px;
    text-align: center;

    padding:2px;
    font-size:8px;
    line-height: 1.2;
    color:#444;
}
.calendar td .isGregorianFestival,
.calendar td .isLunarFestival{
    color:#ea6151;
}
.calendar td.selected span.red{
    background-color: #DDEEFF;
    color: #5CC5FE;
}
.calendar td.selected span.red:hover{
  background-color: #DDEEFF;
  color: #5CC5FE;
}
.calendar thead td {
  text-transform: uppercase;
  height:30px;
  vertical-align: middle;
}
.calendar-button{
    text-align: center;
}
.calendar-button span{
    cursor: pointer;
    display: inline-block;
    min-height: 1em;
    min-width: 5em;
    vertical-align: baseline;
    background:#5e7a88;
    color:#fff;
    margin: 0 .25em 0 0;
    padding: .6em 2em;
    font-size: 1em;
    line-height: 1em;
    text-align: center;
    border-radius: .3em;
}
.calendar-button span.cancel{
    background:#efefef;
    color:#666;
}
.calendar-years{
    position: absolute;
    left:0px;
    top:60px;
    right:0px;
    bottom:0px;
    background:#fff;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap:wrap;
    overflow: auto;
    transition:all .5s cubic-bezier(0.075, 0.82, 0.165, 1);
    opacity: 0;
    pointer-events: none;
    transform: translateY(-10px);
}
.calendar-years.show{
    opacity: 1;
    pointer-events: auto;
    transform: translateY(0px);
}
.calendar-years>span{
    margin:1px 5px;
    display: inline-block;
    width:60px;
    line-height: 30px;
    border-radius: 20px;
    text-align:center;
    border:1px solid #fbfbfb;
    color:#999;
}
.calendar-years>span.active{
    border:1px solid #5e7a88;
    background-color: #5e7a88;
    color:#fff;
}
</style>
