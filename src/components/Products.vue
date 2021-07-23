<template>
  <div class="wrapper">
    <loading :active.sync="isLoading" :is-full-page="fullPage"></loading>
    <div class="page-header page-header-mini">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image: url('/assets/img/home/Sentosa Day.jpg');"
      ></div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="ml-auto mr-auto">
            <h2 class="title">{{ item.title }}</h2>
            <!-- <h5 class="category">{{ item.category }}</h5>
            <h2 class="main-price">${{ item.price }}</h2> -->
            <div id="accordion" role="tablist" aria-multiselectable="true" class="card-collapse">
              <div class="card card-plain">
                <div class="card-header" role="tab" id="headingOne">
                  <a
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseOne"
                    aria-expanded="true"
                    aria-controls="collapseOne"
                  >
                    Description
                    <i class="now-ui-icons arrows-1_minimal-down"></i>
                  </a>
                </div>
                <div
                  id="collapseOne"
                  class="collapse show"
                  role="tabpanel"
                  aria-labelledby="headingOne"
                >
                  <div class="card-body">
                    <p>{{ item.description }}</p>
                  </div>
                </div>
              </div>
              <!-- <div class="card card-plain">
                <div class="card-header" role="tab" id="headingTwo">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseTwo"
                    aria-expanded="false"
                    aria-controls="collapseTwo"
                  >
                    Designer Information
                    <i class="now-ui-icons arrows-1_minimal-down"></i>
                  </a>
                </div>
                <div id="collapseTwo" class="collapse" role="tabpanel" aria-labelledby="headingTwo">
                  <div class="card-body">
                    <p>An infusion of West Coast cool and New York attitude, Rebecca Minkoff is synonymous with It girl style. Minkoff burst on the fashion scene with her best-selling 'Morning After Bag' and later expanded her offering with the Rebecca Minkoff Collection - a range of luxe city staples with a "downtown romantic" theme.</p>
                  </div>
                </div>
              </div>
              <div class="card card-plain">
                <div class="card-header" role="tab" id="headingThree">
                  <a
                    class="collapsed"
                    data-toggle="collapse"
                    data-parent="#accordion"
                    href="#collapseThree"
                    aria-expanded="false"
                    aria-controls="collapseThree"
                  >
                    Details and Care
                    <i class="now-ui-icons arrows-1_minimal-down"></i>
                  </a>
                </div>
                <div
                  id="collapseThree"
                  class="collapse"
                  role="tabpanel"
                  aria-labelledby="headingThree"
                >
                  <div class="card-body">
                    <ul>
                      <li>Storm and midnight-blue stretch cotton-blend</li>
                      <li>Notch lapels, functioning buttoned cuffs, two front flap pockets, single vent, internal pocket</li>
                      <li>Two button fastening</li>
                      <li>84% cotton, 14% nylon, 2% elastane</li>
                      <li>Dry clean</li>
                    </ul>
                  </div>
                </div>
              </div> -->
            </div>
            <!-- <div class="row justify-content-end">
              <button @click="dialogFormVisible = true" class="btn btn-primary mr-3">BUY</button>
            </div>-->
          </div>
        </div>
        <div class="row">
          <div class="col-md-12">
            <img class="d-block img-raised" src="/assets/img/product/Book Cover.jpg" />
          </div>
        </div>
        <div class="container">
          <div class="row">
            <div class="col-md-12 ml-auto mr-auto">
              <h2 class="title text-center">Purchase Information</h2>

              <form role="form" id="contact-form" method="post">
                <div class="alert alert-info" role="alert">
                  <div class="container">
                    <div class="alert-icon">
                      <i class="now-ui-icons shopping_delivery-fast"></i>
                    </div>
                    <strong>Shipping Information</strong>
                  </div>
                </div>
                <label>Your name  <span class="display-error">*</span></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Name..."
                    aria-label="Your Name..."
                    v-model="form.name"
                    id="inputNameId"
                    
                  />
                </div>
                <div id="errorName" class="display-error" style="display: none;">Please input Your Name</div>

                <div class="row">
                  <div class="col-lg-6 col-md-8 col-sm-5 remove-margin-top">
                    <label>Country   <span class="display-error">*</span></label>
                    <div class="input-group">
                      <el-select
                        v-model="form.country"
                        placeholder="Select"
                        class="custom-class-dropdown"
                        @change="getAddressInfo"
                      >
                        <el-option
                          v-for="item in countryOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8 col-sm-5">
                    <label>Postal Code   <span class="display-error">*</span></label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="now-ui-icons location_pin"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Postal Code..."
                        aria-label="Postal Code..."
                        v-model="form.postal_code"
                        id="inputPostalCodeId"
                      />
                    </div>
                    <div id="errorPostalCode" class="display-error" style="display: none;">Please input Postal Code</div>
                  </div>
                </div>

                <div class="form-group">
                  <label>Street Name   <span class="display-error">*</span></label>
                  <textarea
                    class="form-control"
                    rows="6"
                    v-model="form.address"
                    id="inputAddressId"
                  ></textarea>
                  <div id="errorAddress" class="display-error" style="display: none;">Please input Address</div>
                </div>

                <div class="row">
                  <div class="col-lg-6 col-md-8 col-sm-5">
                    <label>Block No.</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="now-ui-icons location_pin"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Block No..."
                        aria-label="Block No..."
                        maxlength="30"
                        v-model="form.block_no"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8 col-sm-5">
                    <label>Unit No.   <span class="display-error">*</span></label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="now-ui-icons location_pin"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Unit No..."
                        aria-label="Unit No..."
                        v-model="form.unit_no"
                        maxlength="30"
                        id="inputUnitNoId"
                      />
                    </div>
                    <div id="errorUnitNo" class="display-error" style="display: none;">Please input Unit No</div>
                  </div>
                </div>

                <label>Contact No   <span class="display-error">*</span></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons tech_mobile"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Number Here..."
                    v-model="form.contact_no"
                    id="inputContactNoId"
                  />
                </div>
                <div id="errorContactNo" class="display-error" style="display: none;">Please input Contact No</div>

                <label>Email   <span class="display-error">*</span></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons ui-1_email-85"></i>
                    </span>
                  </div>
                  <input
                    type="email"
                    class="form-control"
                    placeholder="Email Here..."
                    aria-label="Email Here..."
                    v-model="form.email"
                    id="inputEmailId"
                  />
                </div>
                <div id="errorEmail" class="display-error" style="display: none;">Please input Email</div>
                <div id="errorEmailPattern" class="display-error" style="display: none;">Your email is not valid</div>

                <div class="section-space-cus"></div>
                <div class="alert alert-info" role="alert">
                  <div class="container">
                    <div class="alert-icon">
                      <i class="now-ui-icons shopping_bag-16"></i>
                    </div>
                    <strong>Order Information</strong>
                  </div>
                </div>

                <label>Product Name</label>
                <div class="input-group" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons education_agenda-bookmark"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Product Name..."
                    aria-label="Product Name..."
                    v-model="form.product_name"
                    disabled
                  />
                </div>

                <div class="row">
                  <div class="col-lg-6 col-md-8 col-sm-5">
                    <label>Unit Price</label>
                    <div class="input-group" disabled>
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="now-ui-icons shopping_tag-content"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Unit Price..."
                        aria-label="Unit Price..."
                        v-model="form.unit_price"
                        disabled
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8 col-sm-5 remove-margin-top">
                    <label>Quantity   <span class="display-error">*</span></label>
                    <div class="input-group">
                      <el-select
                        v-model="form.quantity"
                        placeholder="Select"
                        class="custom-class-dropdown"
                        @change="onPaymentCal"
                      >
                        <el-option
                          v-for="item in quantityOptions"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value"
                        ></el-option>
                      </el-select>
                    </div>
                    <div id="errorQuantity" class="display-error" style="display: none;">Please input Quantity</div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-6 col-md-8 col-sm-5">
                    <label>Promo Code</label>
                    <div class="input-group">
                      <div class="input-group-prepend">
                        <span class="input-group-text">
                          <i class="now-ui-icons shopping_tag-content"></i>
                        </span>
                      </div>
                      <input
                        type="text"
                        class="form-control"
                        placeholder="Promo Code..."
                        aria-label="Promo Code..."
                        v-model="form.promo_code"
                        style="text-transform: uppercase;"
                      />
                    </div>
                  </div>
                  <div class="col-lg-6 col-md-8 col-sm-5">
                    <label></label>
                    <div class="input-group">
                      <input
                        type="button"
                        class="btn btn-primary btn-raised btn-round"
                        value="Apply"
                        @click="applyPromoCode"
                      />
                    </div>
                  </div>
                </div>
                <div class="section-space-cus"></div>
                <div class="alert alert-info" role="alert">
                  <div class="container">
                    <div class="alert-icon">
                      <i class="now-ui-icons shopping_cart-simple"></i>
                    </div>
                    <strong>Payment Information</strong>
                  </div>
                </div>
                <label>Total Price</label>
                <div class="input-group" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons business_money-coins"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Total Price..."
                    aria-label="Total Price..."
                    v-model="form.total_price"
                    disabled
                  />
                </div>
                <label>Shipping Rate</label>
                <div class="input-group" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons objects_globe"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Shipping Rate..."
                    aria-label="Shipping Rate..."
                    v-model="form.shipping_rate"
                    disabled
                  />
                </div>
                <label>Discount</label>
                <div class="input-group" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons objects_globe"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Discount..."
                    aria-label="Discount..."
                    v-model="form.discountValue"
                    disabled
                  />
                </div>
                <label>Total Payment</label>
                <div class="input-group" disabled>
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons objects_diamond"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Total Payment..."
                    aria-label="Total Payment..."
                    v-model="form.total_payment"
                    disabled
                  />
                </div>
                <div class="submit text-center">
                  <input
                    type="button"
                    class="btn btn-primary btn-raised btn-round"
                    value="Continue"
                    style="margin-right: 15px;"
                    @click="onSubmit"
                  />

                  <input
                    type="button"
                    class="btn btn-second btn-raised btn-round"
                    value="Cancel"
                    style="margin-left: 15px;"
                    @click="onCancel"
                  />
                </div>
                <div class="submit text-center" id="paypal-button"></div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db } from "../config/firebaseConfig";
import axios from "axios";
import Loading from "vue-loading-overlay";
import "vue-loading-overlay/dist/vue-loading.css";
export default {
  name: "Products",
  data() {
    return {
      item: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        country: "SG",
        quantity: "1",
        address: "",
        promo_code: '',
        discountValue: ''
      },
      formLabelWidth: "120px",
      order: db.collection("order"),
      countryOptions: [],
      quantityOptions: [],
      isLoading: false,
      fullPage: true,
      arrShippingRateData: [],
      firstTimePromoCode: false,
      country_name: '',
      flagFocus: false
    };
  },
  components: {
    Loading
  },
  async created() {
    await this.loadShippingRate();

    let getShippingRate = this.arrShippingRateData.filter(x => x.countryCode === this.form.country).length > 0 ? this.arrShippingRateData.filter(x => x.countryCode === this.form.country)[0].shippingRate : 0;

    db.collection("product")
      .doc(this.$route.params.id)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          let data = snapshot.data();
          this.item = data;
          this.form.product_name = data.title;
          this.form.unit_price = data.price;
          this.form.shipping_rate = getShippingRate;
          this.onPaymentCal();
        } else {
          // snapshot.data() will be undefined in this case
          console.log("No such document!");
        }
      });

    this.getAllCountries().then(result => {
      this.countryOptions = result.filter(x => x.value === 'SG');
      this.country_name = this.countryOptions[0].label;
    });

    this.getQuantity().then(result => {
      this.quantityOptions = result;
    });

    document.getElementById('inputNameId').addEventListener('blur', () => {this.validateForm('name')});
    document.getElementById('inputAddressId').addEventListener('blur', () => {this.validateForm('address')});
    document.getElementById('inputUnitNoId').addEventListener('blur', () => {this.validateForm('unit_no')});
    document.getElementById('inputContactNoId').addEventListener('blur', () => {this.validateForm('contact_no')});
    document.getElementById('inputEmailId').addEventListener('blur', () => {this.validateForm('email')});
    document.getElementById('inputPostalCodeId').addEventListener('blur', () => {this.validateForm('postal_code'); this.getAddressInfo()});
  },
  methods: {
    loadShippingRate() {
      return new Promise((resolve, reject) => {
        db.collection("shipping_rate")
          .get()
          .then(snapshot => {
            let count = 0;

            snapshot.docs.forEach(doc => {
              count++;

              var obj = doc.data();
              this.arrShippingRateData.push({countryCode: obj.countryCode, shippingRate: obj.shippingRate});

              if(count === snapshot.docs.length){
                resolve(true);
              }
            });
          });
      });
    },
    onSubmit() {
      //if (!this.onValidation()) {
      //return;
      //}
      // if(this.firstTimePromoCode === false){
      //   this.$swal({
      //       type: "warning",
      //       title: "Promo Code is not valid",
      //       html: "Please enter a valid Promo Code"
      //     });
      //   this.firstTimePromoCode = true;
      // }
      this.flagFocus = false;

      if(!this.validateForm()){
        var productName = this.item.title;
        var unitPrice = this.form.unit_price;
        var quantity = this.form.quantity;
        var totalPrice = this.form.total_price;
        var shippingRate = this.form.shipping_rate;
        var totalPayment = this.form.total_payment;
        var discount = this.form.discountValue ? parseFloat(this.form.discountValue) : 0;
        var order = this.order;
        var form = this.form;
        var swal = this.$swal;
        var nowDate = this.calcTime("Singapore", "+8");
        var orderDate = this.formatDate(nowDate);
        var today = this.formatDateInvNo(nowDate);
        var country_name = this.country_name;
        var invNo = "";
        var x = {
          aInternal: 10,
          aListener: function(val) {},
          set isPaymentSuccess(val) {
            this.aInternal = val;
            this.aListener(val);
          },
          get isPaymentSuccess() {
            return this.aInternal;
          },
          registerListener: function(listener) {
            this.aListener = listener;
          },
          bListener: function(val) {},
          set isProgressPayment(val) {
            this.aInternal = val;
            this.bListener(val);
          },
          get isProgressPayment() {
            return this.aInternal;
          },
          registerListenerProgressPayment: function(listener) {
            this.bListener = listener;
          }
        };

        this.getInvNo(today).then(snapshot => {
          if (snapshot.docs.length === 0) {
            invNo = "0001";
          }

          snapshot.docs.forEach(doc => {
            var data = doc.data();
            invNo = this.pad(parseInt(data.inv_no.no) + 1, 4);
          });
          if ($("#paypal-button").is(":empty")) {
            // Render the PayPal button into #paypal-button-container
            paypal
              .Buttons({
                // Set up the transaction
                createOrder: (data, actions) => {
                  return actions.order.create({
                    purchase_units: [
                      {
                        description: "The Landlord Club",

                        custom_id: "CUST-MattBookShop",
                        soft_descriptor: "TheLandlordClub",
                        amount: {
                          currency_code: "SGD",
                          value: totalPayment.toString(),
                          breakdown: {
                            item_total: {
                              currency_code: "SGD",
                              value: totalPrice.toString()
                            },
                            shipping: {
                              currency_code: "SGD",
                              value: shippingRate.toString()
                            },
                            discount: {
                              currency_code: "SGD",
                              value: discount.toString()
                            }
                          },
                        },
                        items: [
                          {
                            name: productName.toString(),
                            sku: "sku01",
                            unit_amount: {
                              currency_code: "SGD",
                              value: unitPrice.toString()
                            },
                            quantity: quantity.toString()
                          }
                        ]
                      }
                    ]
                  });
                },
                // Finalize the transaction
                onApprove: (data, actions) => {
                  x.isProgressPayment = true;
                  return actions.order.capture().then((details) => {
                    order
                      .add({
                        product_name: form.product_name,
                        quantity: form.quantity,
                        shipping_rate: form.shipping_rate,
                        total_payment: form.total_payment,
                        total_price: form.total_price,
                        unit_price: form.unit_price,
                        shipping: {
                          address: form.address,
                          contact_no: form.contact_no,
                          country: form.country,
                          country_name: country_name,
                          email: form.email,
                          name: form.name,
                          postal_code: form.postal_code,
                          block_no: form.block_no ? form.block_no : '',
                          unit_no: form.unit_no
                        },
                        order_date: orderDate,
                        inv_no: {
                          date: today,
                          no: invNo
                        },
                        delt_flag: false,
                        promo_code: form.promo_code,
                        discount: form.discountValue
                      })
                      .then(docRef => {
                        axios
                          .get(
                            "https://us-central1-book-store-sg-x.cloudfunctions.net/sendMailHTML?to=" +
                              form.email +
                              "&subject=" +
                              "[thelandlordclub] Your payment has been completed" +
                              "&id=" +
                              docRef.id
                          )
                          .then((response) => {
                            this.updateRemainPromoCode();
                            swal({
                              type: "success",
                              title: "Thank you !",
                              html:
                                "Your order will be on its way. Receipt of this purchase will be sent to your email",
                              allowOutsideClick: false,
                              allowEscapeKey: false
                            }).then(function() {
                              x.isPaymentSuccess = true;
                            });
                          })
                          .catch(function(error) {
                            console.log(error);
                          });
                      })
                      .catch(error => {
                        swal({
                          type: "error",
                          title: "Error",
                          html: error
                        });
                      });
                  });
                }
              })
              .render("#paypal-button");
          }
          x.registerListener(val => {
            this.isLoading = false;
            this.$router.push({ path: "/", hash: "#about" });
          });
          x.registerListenerProgressPayment(val => {
            this.isLoading = true;
          });
        });
      }else{
        return false;
      }
    },
    onCancel(e) {
      e.preventDefault();
      this.form;
      this.form.name = "";
      this.form.postal_code = "";
      this.form.address = "";
      this.form.contact_no = "";
      this.form.email = "";
      this.form.discountValue = "";
    },
    onValidation() {
      var message = "";
      var flag = true;

      if (!this.form.name) {
        message += "Name" + "<br/>";
        flag = false;
      }

      if (!this.form.country) {
        message += "Country" + "<br/>";
        flag = false;
      }

      if (!this.form.address) {
        message += "Address" + "<br/>";
        flag = false;
      }

      if (!this.form.postal_code) {
        message += "Postal Code" + "<br/>";
        flag = false;
      }

      if (!this.form.contact_no) {
        message += "Contact No." + "<br/>";
        flag = false;
      }

      if (!this.form.email) {
        message += "Email" + "<br/>";
        flag = false;
      }

      if (!this.form.quantity) {
        message += "Quantity" + "<br/>";
        flag = false;
      }

      if (!flag) {
        this.$swal({
          type: "error",
          title: "Please input",
          html: message
        });
      }

      return flag;
    },
    onPaymentCal() {
      this.form.total_price =
        parseFloat(this.form.unit_price) * parseFloat(this.form.quantity);
      this.form.total_payment = parseFloat(this.form.total_price) + parseFloat(this.form.shipping_rate) - (this.form.discountValue ? parseFloat(this.form.discountValue) : 0);
    },
    calcTime(city, offset) {
      var d = new Date();
      var utc = d.getTime() + d.getTimezoneOffset() * 60000;
      var nd = new Date(utc + 3600000 * offset);
      return nd;
    },
    getInvNo(today) {
      return new Promise((resolve, reject) => {
        db.collection("order")
          .where("inv_no.date", "==", today)
          .orderBy("order_date", "desc")
          .limit(1)
          .get()
          .then(snapshot => {
            resolve(snapshot);
          })
          .catch(error => {
            reject(error); // the request failed
          });
      });
    },
    formatDateInvNo(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d
          .getFullYear()
          .toString()
          .substring(2, 4);

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return [day, month, year].join("");
    },
    pad(n, width, z) {
      z = z || "0";
      n = n + "";
      return n.length >= width
        ? n
        : new Array(width - n.length + 1).join(z) + n;
    },
    async getAddressInfo() {
      this.isLoading = true;
      let getShippingRate = this.arrShippingRateData.filter(x => x.countryCode === this.form.country).length > 0 ? this.arrShippingRateData.filter(x => x.countryCode === this.form.country)[0].shippingRate : 0;
      this.form.shipping_rate = getShippingRate;
      if (this.form.country) {
        if (this.form.postal_code) {
          var addressInfo = await this.getAddress(
            this.form.country,
            this.form.postal_code
          );
          this.form.address = addressInfo;
          this.isLoading = false;
          this.validateForm('address');
        } else {
          this.form.address = "";
          this.isLoading = false;
        }
      } else {
        this.form.address = "";
        this.isLoading = false;
      }
    },
    getAddress(countryCode, postalCode) {
      return new Promise(async (resolve, reject) => {
        axios
          .get(
            "https://app.zipcodebase.com/api/v1/search?codes=" +
              postalCode +
              "&country=" +
              countryCode +
              "&apikey=ed826b40-129e-11eb-b211-6567aacec870"
          )
          .then(function(response) {
            console.log(response);
            if (response.status === 200) {
              resolve(response.data.results[postalCode][0].city);
            }
          })
          .catch(function(error) {
            resolve("");
          });
      });
    },
    checkPromoCode(promoCode) {
      return new Promise((resolve, reject) => {
        db.collection("promo")
          .where("active", "==", true)
          .get()
          .then(snapshot => {
            let count = 0;
            snapshot.docs.forEach(item => {
              count++;

              if(item.data().name.toLowerCase() === promoCode.toLowerCase()){
                let obj = item.data();

                if(obj.remain > 0){
                  resolve({
                    value: obj.value,
                    remain: obj.remain,
                    documentId: item.id
                  });
                }
              }

              if(count === snapshot.docs.length){
                resolve(false);
              }
            });
          })
          .catch(error => {
            reject(error); // the request failed
          });
      });
    },
    async applyPromoCode() {
      this.firstTimePromoCode = true;
      let validPromoCode = await this.checkPromoCode(this.form.promo_code);
      
      if(!validPromoCode){
        this.$swal({
            type: "warning",
            title: "Promo Code is not valid",
            html: "Please enter a valid Promo Code"
          });
        this.form.discountValue = '';
        this.onPaymentCal();
      }else{
        // this.form.discountValue = (parseFloat(this.form.total_price) * validPromoCode.value) / 100;
        this.form.discountValue = validPromoCode.value;
        this.onPaymentCal();
      }
    },
    async updateRemainPromoCode() {
      if(this.form.promo_code){
        let validPromoCode = await this.checkPromoCode(this.form.promo_code);

        db.collection("promo")
          .doc(validPromoCode.documentId)
          .update({
            remain: validPromoCode.remain - 1
          })
          .then(snapshot => {
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    validateForm(field){
      let flagError = false;
      let flagValidataField = false;

      if(field){
        flagValidataField = true;
      }

      if(!flagValidataField){
        field  = 'all';
      }

      // Your Name
      if((!this.form.name && field === 'all') || (!this.form.name && field === 'name')){
        document.getElementById("errorName").setAttribute("style", "display: block;");

        if(!this.flagFocus){
          document.getElementById("inputNameId").focus();
          this.flagFocus = true;
        }
        
        flagError = true;
      }else{
        if(this.form.name)
          document.getElementById("errorName").setAttribute("style", "display: none;");
      }

      // // Country
      // if((!this.form.country && field === 'all') || (!this.form.country && field === 'country')){
      //   document.getElementById("errorCountry").setAttribute("style", "display: block;");
      //   flagError = true;
      // }else{
      //   document.getElementById("errorCountry").setAttribute("style", "display: none;");
      // }

      // Postal Code
      if((!this.form.postal_code && field === 'all') || (!this.form.postal_code && field === 'postal_code')){
        document.getElementById("errorPostalCode").setAttribute("style", "display: block;");
        
        if(!this.flagFocus){
          document.getElementById("inputPostalCodeId").focus();
          this.flagFocus = true;
        }

        flagError = true;
      }else{
        if(this.form.postal_code)
          document.getElementById("errorPostalCode").setAttribute("style", "display: none;");
      }

      // Address
      if((!this.form.address && field === 'all') || (!this.form.address && field === 'address')){
        document.getElementById("errorAddress").setAttribute("style", "display: block;");
        
        if(!this.flagFocus){
          document.getElementById("inputAddressId").focus();
          this.flagFocus = true;
        }

        flagError = true;
      }else{
        if(this.form.address)
          document.getElementById("errorAddress").setAttribute("style", "display: none;");
      }

      // Unit No
      if((!this.form.unit_no && field === 'all') || (!this.form.unit_no && field === 'unit_no')){
        document.getElementById("errorUnitNo").setAttribute("style", "display: block;");

        if(!this.flagFocus){
          document.getElementById("inputUnitNoId").focus();
          this.flagFocus = true;
        }

        flagError = true;
      }else{
        if(this.form.unit_no)
          document.getElementById("errorUnitNo").setAttribute("style", "display: none;");
      }

      // Contact No
      if((!this.form.contact_no && field === 'all') || (!this.form.contact_no && field === 'contact_no')){
        document.getElementById("errorContactNo").setAttribute("style", "display: block;");

        if(!this.flagFocus){
          document.getElementById("inputContactNoId").focus();
          this.flagFocus = true;
        }

        flagError = true;
      }else{
        if(this.form.contact_no)
          document.getElementById("errorContactNo").setAttribute("style", "display: none;");
      }

      // Email
      if((!this.form.email && field === 'all') || (!this.form.email && field === 'email')){
        document.getElementById("errorEmail").setAttribute("style", "display: block;");
        document.getElementById("errorEmailPattern").setAttribute("style", "display: none;");

        if(!this.flagFocus){
          document.getElementById("inputEmailId").focus();

          this.flagFocus = true;
        }

        flagError = true;
      }else{
        if(this.form.email){
          document.getElementById("errorEmail").setAttribute("style", "display: none;");

          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          
          if(!re.test(String(this.form.email).toLowerCase())){
            document.getElementById("errorEmailPattern").setAttribute("style", "display: block;");

            if(!this.flagFocus){
              document.getElementById("inputEmailId").focus();

              this.flagFocus = true;
            }
            
            flagError = true;
          }else{
            document.getElementById("errorEmailPattern").setAttribute("style", "display: none;");
          }
        }
      }

      // Quantity
      if((!this.form.quantity && field === 'all') || (!this.form.quantity && field === 'quantity')){
        document.getElementById("errorQuantity").setAttribute("style", "display: block;");

        flagError = true;
      }else{
        if(this.form.quantity)
          document.getElementById("errorQuantity").setAttribute("style", "display: none;");
      }

      return flagError;
    }
  }
};
</script>

<style>
.remove-margin-top > div > button {
  margin-top: 0px !important;
  border: 1px solid #888888;
}

.section-space-cus {
  height: 1em;
}

.custom-class-dropdown {
  border: solid 1px;
  border: 2px solid #aba9a9;
  border-radius: 30px;
  width: 100%;
}
.custom-class-dropdown > div > input {
  border-radius: 30px;
  font-size: 0.8571em;
  height: 36px;
}
.display-error {
  color: red;
  font-style: italic;
}
</style>
