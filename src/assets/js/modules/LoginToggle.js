import BaseModule from "./BaseModule"
import $ from "jquery";

export default class LoginToggle extends BaseModule {
  register() {
    console.log(this)
    $('.message a').click(function () {
      $('form').animate({ height: "toggle", opacity: "toggle" }, "slow");
    });
  }


}
