import BaseModule from "./BaseModule"
// import $ from "jquery";
import 'slick-carousel'
import datepicker from 'js-datepicker'
export default class DatePicker extends BaseModule {
  register() {
    /* eslint-disable no-unused-vars */
    this.datePic = this.el.querySelectorAll('.datepicker-s');
    this.datePic.forEach((link) => {
      const picker = datepicker(link, {
        position: 'bl',
        customDays: ['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7'],
        customMonths: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5", "Tháng 6", "Tháng 7", "Tháng 8", "Tháng 9", "Tháng 10", "Tháng 11", "Tháng 12"],
        customOverlayMonths: ["T1", "T2", "T3", "T4", "T5", "T6", "T7", "T8", "T9", "T10", "T11", "T12"],
        overlayButton: "Chọn!",
        overlayPlaceholder: 'Nhập năm 1996',
        startDay: 1,
        formatter: (input, date, instance) => {
          const value = date.toLocaleDateString('en-GB')
          input.value = value // => '1/1/2099'
        },

      })

    })
    /* eslint-enable no-unused-vars */
  }
  


}
