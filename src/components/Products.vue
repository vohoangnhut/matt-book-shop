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
            </div> -->
          </div>
        </div>
          <div class="container">
            <div class="row">
              <div class="col-md-12 ml-auto mr-auto">
                <h2 class="title text-center">Purchase Information</h2>
                
                  <form role="form" id="contact-form" method="post">
                      <div class="alert alert-success" role="alert">
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
                              <span class="input-group-text"><i class="now-ui-icons users_circle-08"></i></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Your Name..." aria-label="Your Name...">
                      </div>
                      
                      <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-5 remove-margin-top">
                          <label>Country</label>
                          <select class="selectpicker dropdown-countries" data-size="7" data-style="btn btn-round" title="Single Select">
                              <option disabled selected>Single Option</option>
                              <option value="2">Foobar</option>
                              <option value="3">Is great</option>
                          </select>
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-5">
                          <label>Postal Code</label>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="now-ui-icons location_pin"></i></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Your Name..." aria-label="Your Name...">
                          </div>
                        </div>
                      </div>

                      <div class="form-group">
                          <label>Address</label>
                          <textarea name="message" class="form-control" id="message" rows="6"></textarea>
                      </div>
                      
                      
                      <label>Phone</label>
                      <div class="input-group">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="now-ui-icons tech_mobile"></i></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Number Here...">
                      </div>

                      <label>Email</label>
                      <div class="input-group">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="now-ui-icons ui-1_email-85"></i></span>
                          </div>
                          <input type="email" class="form-control" placeholder="Email Here..." aria-label="Email Here...">
                      </div>
                      
                      <div class="alert alert-success" role="alert">
                        <div class="container">
                            <div class="alert-icon">
                                <i class="now-ui-icons shopping_bag-16"></i>
                            </div>
                            <strong>Order Information</strong>
                        </div>
                      </div>
                      
                      <label>Product Name</label>
                      <div class="input-group">
                          <div class="input-group-prepend">
                              <span class="input-group-text"><i class="now-ui-icons education_agenda-bookmark"></i></span>
                          </div>
                          <input type="text" class="form-control" placeholder="Your Name..." aria-label="Your Name...">
                      </div>

                      <div class="row">
                        <div class="col-lg-6 col-md-8 col-sm-5">
                          <label>Unit Price</label>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="now-ui-icons shopping_tag-content"></i></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Your Name..." aria-label="Your Name...">
                          </div>
                        </div>
                        <div class="col-lg-6 col-md-8 col-sm-5 remove-margin-top">
                          <label>Quantity</label>
                          <select class="selectpicker dropdown-countries" data-size="7" data-style="btn btn-round" title="Single Select">
                              <option disabled selected>1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                          </select>
                        </div>
                      </div>
                      <div class="alert alert-success" role="alert">
                          <div class="container">
                              <div class="alert-icon">
                                  <i class="now-ui-icons shopping_delivery-fast"></i>
                              </div>
                              <strong>Payment Information</strong>
                          </div>
                      </div>

                           <label>Total Price</label>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="now-ui-icons business_money-coins"></i></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Your Name..." aria-label="Your Name...">
                          </div>
                           <label>Shipping Rate</label>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="now-ui-icons objects_globe"></i></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Your Name..." aria-label="Your Name...">
                          </div>
                           <label>Total Payment</label>
                          <div class="input-group">
                              <div class="input-group-prepend">
                                  <span class="input-group-text"><i class="now-ui-icons objects_diamond"></i></span>
                              </div>
                              <input type="text" class="form-control" placeholder="Your Name..." aria-label="Your Name...">
                          </div>
                      

                      <div class="submit text-center">
                          <input type="submit" class="btn btn-primary btn-raised btn-round" value="Continue" style="margin-right: 15px;"/>

                          <input type="submit" class="btn btn-second btn-raised btn-round" value="Cancel" style="margin-left: 15px;"/>
                      </div>

                


                      
                  </form>
              </div>
            </div>
          </div>
        


        <!-- <div class="features-4">
          <div class="container">
            <div class="row">
              <div class="col-md-8 ml-auto mr-auto text-center">
                <h2 class="title">Not convinced yet!</h2>
                <h4
                  class="description"
                >Havenly is a convenient, personal and affordable way to redecorate your home room by room. Collaborate with our professional interior designers on our online platform.</h4>
              </div>
            </div>
            <div class="row">
              <div class="col-md-4">
                <div
                  class="card card-background card-raised"
                  data-background-color
                  style="background-image: url('/assets//img/bg24.jpg')"
                >
                  <div class="info">
                    <div class="icon icon-white">
                      <i class="now-ui-icons shopping_delivery-fast"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">1 Day Delivery</h4>
                      <p>Divide details about your product or agency work into parts. Write a few lines about each one. A paragraph describing a feature will be enough.</p>
                      <a href="#pablo" class="ml-3">Find more...</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="card card-background card-raised"
                  data-background-color
                  style="background-image: url('/assets//img/bg28.jpg')"
                >
                  <div class="info">
                    <div class="icon icon-white">
                      <i class="now-ui-icons business_badge"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Refund Policy</h4>
                      <p>Divide details about your product or agency work into parts. Write a few lines about each one. Very good refund policy just for you.</p>
                      <a href="#pablo">Find more...</a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-md-4">
                <div
                  class="card card-background card-raised"
                  data-background-color
                  style="background-image: url('/assets//img/bg25.jpg')"
                >
                  <div class="info">
                    <div class="icon">
                      <i class="now-ui-icons ui-2_favourite-28"></i>
                    </div>
                    <div class="description">
                      <h4 class="info-title">Popular Item</h4>
                      <p>Share a floor plan, and we'll create a visualization of your room. A paragraph describing a feature will be enough. This is a popular item for you.</p>
                      <a href="#pablo" class="ml-3">Find more...</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div> -->
      </div>
    </div>
<!--     
    <el-dialog title="Shipping & Order Information" :visible.sync="dialogFormVisible">
      <el-form :model="form" size="mini">
        <el-form-item label="Name:" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-divider content-position="left">Shipping</el-divider>
        <el-form-item label="Contact No.:" :label-width="formLabelWidth">
          <el-input v-model="form.contact_no" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Email:" :label-width="formLabelWidth">
          <el-input v-model="form.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Product Name:" :label-width="formLabelWidth">
          <el-input v-model="form.product_name" autocomplete="off">asd{{ item.title }}</el-input>
        </el-form-item>
        <el-form-item label="Unit Price:" :label-width="formLabelWidth">
          <el-input v-model="form.unit_price" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="Quantity:" :label-width="formLabelWidth">
          <el-select v-model="form.quantity" placeholder="Please select a quantity">
            <el-option label="1" value="1"></el-option>
            <el-option label="2" value="2"></el-option>
            <el-option label="3" value="3"></el-option>
            <el-option label="4" value="4"></el-option>
            <el-option label="5" value="5"></el-option>
            <el-option label="6" value="6"></el-option>
            <el-option label="7" value="7"></el-option>
            <el-option label="8" value="8"></el-option>
            <el-option label="9" value="9"></el-option>
            <el-option label="10" value="10"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">Cancel</el-button>
        <el-button type="primary" @click="onSubmit">Confirm</el-button>
      </span>
    </el-dialog> -->
    
  </div>
</template>
<script>
import { db } from "../config/firebaseConfig";
export default {
  name: "Products",
  data() {
    return {
      item: {},
      dialogTableVisible: false,
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "120px",
      shipping: db.collection('shipping'),
      order: db.collection('order'),
    };
  },
  created() {
    db.collection("product").doc(this.$route.params.id).get().then(snapshot => {
      if (snapshot.exists) {
        let data = snapshot.data();
        this.item = data;
      } else {
        // snapshot.data() will be undefined in this case
        console.log("No such document!");
      }
    });
  },
  methods: {
    onSubmit(){
      /*if (!this.onValidation()) {
        return;
      }*/

      this.shipping.add({
        address: this.form.address,
        contact_no: this.form.contact_no,
        country: this.form.country,
        email: this.form.email,
        name: this.form.name,
        postal_code: this.form.postal_code
      }).then((docRef) => {
        this.order.add({
          product_name: this.form.product_name,
          quantity: this.form.quantity,
          shipping_id: docRef.id,
          shipping_rate: this.form.shipping_rate,
          total_payment: this.form.total_payment,
          total_price: this.form.total_price,
          unit_price: this.form.unit_price
        }).then(() => {
          this.form = {};
        })
        .catch((error) => {
          alert('Error adding document: ', error);
        });
      })
      .catch((error) => {
        alert('Error adding document: ', error);
      });
    },
    onValidation () {
    }
  }
};
</script>

<style>
.remove-margin-top > div > button {
    margin-top: 0px !important;
}
</style>