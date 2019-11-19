<template>
  <div class="wrapper">
    <div class="page-header page-header-mini">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image: url('/assets/img/pp-cov.jpg') ;"
      ></div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-5">
            <div
              id="productCarousel"
              class="carousel slide"
              data-ride="carousel"
              data-interval="8000"
            >
              <ol class="carousel-indicators">
                <li data-target="#productCarousel" data-slide-to="0" class="active"></li>
                <li data-target="#productCarousel" data-slide-to="1"></li>
                <li data-target="#productCarousel" data-slide-to="2"></li>
                <li data-target="#productCarousel" data-slide-to="3"></li>
              </ol>
              <div class="carousel-inner" role="listbox">
                <div class="carousel-item active">
                  <img class="d-block img-raised" src="/assets//img/pp-1.jpg" alt="First slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block img-raised" src="/assets//img/pp-2.jpg" alt="Second slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block img-raised" src="/assets//img/pp-3.jpg" alt="Third slide" />
                </div>
                <div class="carousel-item">
                  <img class="d-block img-raised" src="/assets//img/pp-4.jpg" alt="Third slide" />
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#productCarousel"
                role="button"
                data-slide="prev"
              >
                <button
                  type="button"
                  class="btn btn-primary btn-icon btn-round btn-sm"
                  name="button"
                >
                  <i class="now-ui-icons arrows-1_minimal-left"></i>
                </button>
              </a>
              <a
                class="carousel-control-next"
                href="#productCarousel"
                role="button"
                data-slide="next"
              >
                <button
                  type="button"
                  class="btn btn-primary btn-icon btn-round btn-sm"
                  name="button"
                >
                  <i class="now-ui-icons arrows-1_minimal-right"></i>
                </button>
              </a>
            </div>
            <p class="blockquote blockquote-primary">
              "And thank you for turning my personal jean jacket into a couture piece. Wear yours with mirrored sunglasses on vacation."
              <br />
              <br />
              <small>Kanye West</small>
            </p>
          </div>
          <div class="col-md-6 ml-auto mr-auto">
            <h2 class="title">{{ item.title }}</h2>
            <h5 class="category">{{ item.category }}</h5>
            <h2 class="main-price">${{ item.price }}</h2>
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
              <div class="card card-plain">
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
              </div>
            </div>
            <!-- <div class="row justify-content-end">
              <button @click="dialogFormVisible = true" class="btn btn-primary mr-3">BUY</button>
            </div>-->
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
                <label>Your name</label>
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
                  />
                </div>

                <div class="row">
                  <div class="col-lg-6 col-md-8 col-sm-5 remove-margin-top">
                    <label>Country</label>
                    <div class="input-group">
                      <el-select
                        v-model="form.country"
                        placeholder="Select"
                        class="custom-class-dropdown"
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
                    <label>Postal Code</label>
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
                      />
                    </div>
                  </div>
                </div>

                <div class="form-group">
                  <label>Address</label>
                  <textarea
                    name="message"
                    class="form-control"
                    id="message"
                    rows="6"
                    v-model="form.address"
                  ></textarea>
                </div>

                <label>Contact No</label>
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
                  />
                </div>

                <label>Email</label>
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
                  />
                </div>

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
                    <label>Quantity</label>
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
export default {
  name: "Products",
  data() {
    return {
      item: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {
        country: "Singapore",
        quantity: "1"
      },
      formLabelWidth: "120px",
      order: db.collection("order"),
      countryOptions: [],
      quantityOptions: []
    };
  },
  created() {
    db.collection("product")
      .doc(this.$route.params.id)
      .get()
      .then(snapshot => {
        if (snapshot.exists) {
          let data = snapshot.data();
          this.item = data;
          this.form.product_name = data.title;
          this.form.unit_price = data.price;
          this.form.shipping_rate = "5";
          this.onPaymentCal();
        } else {
          // snapshot.data() will be undefined in this case
          console.log("No such document!");
        }
      });

    this.getAllCountries().then(result => {
      this.countryOptions = result;
    });

    this.getQuantity().then(result => {
      this.quantityOptions = result;
    });
  },
  methods: {
    onSubmit() {
      if (!this.onValidation()) {
        return;
      }
      var productName = this.item.title;
      var unitPrice = this.form.unit_price;
      var quantity = this.form.quantity;
      var totalPrice = this.form.total_price;
      var shippingRate = this.form.shipping_rate;
      var totalPayment = this.form.total_payment;
      var order = this.order;
      var form = this.form;
      var swal = this.$swal;
      var nowDate = this.calcTime("Singapore", "+8");
      var orderDate = this.formatDate(nowDate);
      var today = this.formatDateInvNo(nowDate);
      var invNo = "";

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
              createOrder: function(data, actions) {
                return actions.order.create({
                  purchase_units: [
                    {
                      description: "Matt Book Shop",

                      custom_id: "CUST-MattBookShop",
                      soft_descriptor: "MattBookShop",
                      amount: {
                        currency_code: "USD",
                        value: totalPayment.toString(),
                        breakdown: {
                          item_total: {
                            currency_code: "USD",
                            value: totalPrice.toString()
                          },
                          shipping: {
                            currency_code: "USD",
                            value: shippingRate.toString()
                          }
                        }
                      },
                      items: [
                        {
                          name: productName.toString(),
                          sku: "sku01",
                          unit_amount: {
                            currency_code: "USD",
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
              onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
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
                        email: form.email,
                        name: form.name,
                        postal_code: form.postal_code
                      },
                      order_date: orderDate,
                      inv_no: {
                        date: today,
                        no: invNo
                      },
                      delt_flag: false
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
                        .then(function(response) {
                          swal({
                            type: "success",
                            title: "Thank you !",
                            html:
                              "Your order will be on its way. Receipt of this purchase will be sent to your email"
                          });
                        })
                        .catch(function(error) {
                          swal({
                            type: "error",
                            title: "Error",
                            html: error
                          });
                        });
                    })
                    .catch(error => {
                      swal({
                        type: "error",
                        title: "Error",
                        html: "Error adding document: ",
                        error
                      });
                    });
                });
              }
            })
            .render("#paypal-button");
        }
      });
    },
    onCancel(e) {
      e.preventDefault();
      this.form;
      this.form.name = "";
      this.form.postal_code = "";
      this.form.address = "";
      this.form.contact_no = "";
      this.form.email = "";
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
      this.form.total_payment =
        parseFloat(this.form.total_price) + parseFloat(this.form.shipping_rate);
    },
    calcTime(city, offset) {
      var d = new Date();
      var utc = d.getTime() + d.getTimezoneOffset() * 60000;
      var nd = new Date(utc + 3600000 * offset);
      return nd.toLocaleString();
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
</style>
