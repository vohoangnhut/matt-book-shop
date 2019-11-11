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
                    <select
                      class="selectpicker dropdown-countries"
                      data-size="7"
                      data-style="btn btn-round"
                      title="Single Select"
                      v-model="form.country"
                      id="cbxCountry"
                    >
                      <option value="Afganistan">Afghanistan</option>
                      <option value="Albania">Albania</option>
                      <option value="Algeria">Algeria</option>
                      <option value="American Samoa">American Samoa</option>
                      <option value="Andorra">Andorra</option>
                      <option value="Angola">Angola</option>
                      <option value="Anguilla">Anguilla</option>
                      <option value="Antigua & Barbuda">Antigua & Barbuda</option>
                      <option value="Argentina">Argentina</option>
                      <option value="Armenia">Armenia</option>
                      <option value="Aruba">Aruba</option>
                      <option value="Australia">Australia</option>
                      <option value="Austria">Austria</option>
                      <option value="Azerbaijan">Azerbaijan</option>
                      <option value="Bahamas">Bahamas</option>
                      <option value="Bahrain">Bahrain</option>
                      <option value="Bangladesh">Bangladesh</option>
                      <option value="Barbados">Barbados</option>
                      <option value="Belarus">Belarus</option>
                      <option value="Belgium">Belgium</option>
                      <option value="Belize">Belize</option>
                      <option value="Benin">Benin</option>
                      <option value="Bermuda">Bermuda</option>
                      <option value="Bhutan">Bhutan</option>
                      <option value="Bolivia">Bolivia</option>
                      <option value="Bonaire">Bonaire</option>
                      <option value="Bosnia & Herzegovina">Bosnia & Herzegovina</option>
                      <option value="Botswana">Botswana</option>
                      <option value="Brazil">Brazil</option>
                      <option value="British Indian Ocean Ter">British Indian Ocean Ter</option>
                      <option value="Brunei">Brunei</option>
                      <option value="Bulgaria">Bulgaria</option>
                      <option value="Burkina Faso">Burkina Faso</option>
                      <option value="Burundi">Burundi</option>
                      <option value="Cambodia">Cambodia</option>
                      <option value="Cameroon">Cameroon</option>
                      <option value="Canada">Canada</option>
                      <option value="Canary Islands">Canary Islands</option>
                      <option value="Cape Verde">Cape Verde</option>
                      <option value="Cayman Islands">Cayman Islands</option>
                      <option value="Central African Republic">Central African Republic</option>
                      <option value="Chad">Chad</option>
                      <option value="Channel Islands">Channel Islands</option>
                      <option value="Chile">Chile</option>
                      <option value="China">China</option>
                      <option value="Christmas Island">Christmas Island</option>
                      <option value="Cocos Island">Cocos Island</option>
                      <option value="Colombia">Colombia</option>
                      <option value="Comoros">Comoros</option>
                      <option value="Congo">Congo</option>
                      <option value="Cook Islands">Cook Islands</option>
                      <option value="Costa Rica">Costa Rica</option>
                      <option value="Cote DIvoire">Cote DIvoire</option>
                      <option value="Croatia">Croatia</option>
                      <option value="Cuba">Cuba</option>
                      <option value="Curaco">Curacao</option>
                      <option value="Cyprus">Cyprus</option>
                      <option value="Czech Republic">Czech Republic</option>
                      <option value="Denmark">Denmark</option>
                      <option value="Djibouti">Djibouti</option>
                      <option value="Dominica">Dominica</option>
                      <option value="Dominican Republic">Dominican Republic</option>
                      <option value="East Timor">East Timor</option>
                      <option value="Ecuador">Ecuador</option>
                      <option value="Egypt">Egypt</option>
                      <option value="El Salvador">El Salvador</option>
                      <option value="Equatorial Guinea">Equatorial Guinea</option>
                      <option value="Eritrea">Eritrea</option>
                      <option value="Estonia">Estonia</option>
                      <option value="Ethiopia">Ethiopia</option>
                      <option value="Falkland Islands">Falkland Islands</option>
                      <option value="Faroe Islands">Faroe Islands</option>
                      <option value="Fiji">Fiji</option>
                      <option value="Finland">Finland</option>
                      <option value="France">France</option>
                      <option value="French Guiana">French Guiana</option>
                      <option value="French Polynesia">French Polynesia</option>
                      <option value="French Southern Ter">French Southern Ter</option>
                      <option value="Gabon">Gabon</option>
                      <option value="Gambia">Gambia</option>
                      <option value="Georgia">Georgia</option>
                      <option value="Germany">Germany</option>
                      <option value="Ghana">Ghana</option>
                      <option value="Gibraltar">Gibraltar</option>
                      <option value="Great Britain">Great Britain</option>
                      <option value="Greece">Greece</option>
                      <option value="Greenland">Greenland</option>
                      <option value="Grenada">Grenada</option>
                      <option value="Guadeloupe">Guadeloupe</option>
                      <option value="Guam">Guam</option>
                      <option value="Guatemala">Guatemala</option>
                      <option value="Guinea">Guinea</option>
                      <option value="Guyana">Guyana</option>
                      <option value="Haiti">Haiti</option>
                      <option value="Hawaii">Hawaii</option>
                      <option value="Honduras">Honduras</option>
                      <option value="Hong Kong">Hong Kong</option>
                      <option value="Hungary">Hungary</option>
                      <option value="Iceland">Iceland</option>
                      <option value="Indonesia">Indonesia</option>
                      <option value="India">India</option>
                      <option value="Iran">Iran</option>
                      <option value="Iraq">Iraq</option>
                      <option value="Ireland">Ireland</option>
                      <option value="Isle of Man">Isle of Man</option>
                      <option value="Israel">Israel</option>
                      <option value="Italy">Italy</option>
                      <option value="Jamaica">Jamaica</option>
                      <option value="Japan">Japan</option>
                      <option value="Jordan">Jordan</option>
                      <option value="Kazakhstan">Kazakhstan</option>
                      <option value="Kenya">Kenya</option>
                      <option value="Kiribati">Kiribati</option>
                      <option value="Korea North">Korea North</option>
                      <option value="Korea Sout">Korea South</option>
                      <option value="Kuwait">Kuwait</option>
                      <option value="Kyrgyzstan">Kyrgyzstan</option>
                      <option value="Laos">Laos</option>
                      <option value="Latvia">Latvia</option>
                      <option value="Lebanon">Lebanon</option>
                      <option value="Lesotho">Lesotho</option>
                      <option value="Liberia">Liberia</option>
                      <option value="Libya">Libya</option>
                      <option value="Liechtenstein">Liechtenstein</option>
                      <option value="Lithuania">Lithuania</option>
                      <option value="Luxembourg">Luxembourg</option>
                      <option value="Macau">Macau</option>
                      <option value="Macedonia">Macedonia</option>
                      <option value="Madagascar">Madagascar</option>
                      <option value="Malaysia">Malaysia</option>
                      <option value="Malawi">Malawi</option>
                      <option value="Maldives">Maldives</option>
                      <option value="Mali">Mali</option>
                      <option value="Malta">Malta</option>
                      <option value="Marshall Islands">Marshall Islands</option>
                      <option value="Martinique">Martinique</option>
                      <option value="Mauritania">Mauritania</option>
                      <option value="Mauritius">Mauritius</option>
                      <option value="Mayotte">Mayotte</option>
                      <option value="Mexico">Mexico</option>
                      <option value="Midway Islands">Midway Islands</option>
                      <option value="Moldova">Moldova</option>
                      <option value="Monaco">Monaco</option>
                      <option value="Mongolia">Mongolia</option>
                      <option value="Montserrat">Montserrat</option>
                      <option value="Morocco">Morocco</option>
                      <option value="Mozambique">Mozambique</option>
                      <option value="Myanmar">Myanmar</option>
                      <option value="Nambia">Nambia</option>
                      <option value="Nauru">Nauru</option>
                      <option value="Nepal">Nepal</option>
                      <option value="Netherland Antilles">Netherland Antilles</option>
                      <option value="Netherlands">Netherlands (Holland, Europe)</option>
                      <option value="Nevis">Nevis</option>
                      <option value="New Caledonia">New Caledonia</option>
                      <option value="New Zealand">New Zealand</option>
                      <option value="Nicaragua">Nicaragua</option>
                      <option value="Niger">Niger</option>
                      <option value="Nigeria">Nigeria</option>
                      <option value="Niue">Niue</option>
                      <option value="Norfolk Island">Norfolk Island</option>
                      <option value="Norway">Norway</option>
                      <option value="Oman">Oman</option>
                      <option value="Pakistan">Pakistan</option>
                      <option value="Palau Island">Palau Island</option>
                      <option value="Palestine">Palestine</option>
                      <option value="Panama">Panama</option>
                      <option value="Papua New Guinea">Papua New Guinea</option>
                      <option value="Paraguay">Paraguay</option>
                      <option value="Peru">Peru</option>
                      <option value="Phillipines">Philippines</option>
                      <option value="Pitcairn Island">Pitcairn Island</option>
                      <option value="Poland">Poland</option>
                      <option value="Portugal">Portugal</option>
                      <option value="Puerto Rico">Puerto Rico</option>
                      <option value="Qatar">Qatar</option>
                      <option value="Republic of Montenegro">Republic of Montenegro</option>
                      <option value="Republic of Serbia">Republic of Serbia</option>
                      <option value="Reunion">Reunion</option>
                      <option value="Romania">Romania</option>
                      <option value="Russia">Russia</option>
                      <option value="Rwanda">Rwanda</option>
                      <option value="St Barthelemy">St Barthelemy</option>
                      <option value="St Eustatius">St Eustatius</option>
                      <option value="St Helena">St Helena</option>
                      <option value="St Kitts-Nevis">St Kitts-Nevis</option>
                      <option value="St Lucia">St Lucia</option>
                      <option value="St Maarten">St Maarten</option>
                      <option value="St Pierre & Miquelon">St Pierre & Miquelon</option>
                      <option value="St Vincent & Grenadines">St Vincent & Grenadines</option>
                      <option value="Saipan">Saipan</option>
                      <option value="Samoa">Samoa</option>
                      <option value="Samoa American">Samoa American</option>
                      <option value="San Marino">San Marino</option>
                      <option value="Sao Tome & Principe">Sao Tome & Principe</option>
                      <option value="Saudi Arabia">Saudi Arabia</option>
                      <option value="Senegal">Senegal</option>
                      <option value="Seychelles">Seychelles</option>
                      <option value="Sierra Leone">Sierra Leone</option>
                      <option value="Singapore" selected>Singapore</option>
                      <option value="Slovakia">Slovakia</option>
                      <option value="Slovenia">Slovenia</option>
                      <option value="Solomon Islands">Solomon Islands</option>
                      <option value="Somalia">Somalia</option>
                      <option value="South Africa">South Africa</option>
                      <option value="Spain">Spain</option>
                      <option value="Sri Lanka">Sri Lanka</option>
                      <option value="Sudan">Sudan</option>
                      <option value="Suriname">Suriname</option>
                      <option value="Swaziland">Swaziland</option>
                      <option value="Sweden">Sweden</option>
                      <option value="Switzerland">Switzerland</option>
                      <option value="Syria">Syria</option>
                      <option value="Tahiti">Tahiti</option>
                      <option value="Taiwan">Taiwan</option>
                      <option value="Tajikistan">Tajikistan</option>
                      <option value="Tanzania">Tanzania</option>
                      <option value="Thailand">Thailand</option>
                      <option value="Togo">Togo</option>
                      <option value="Tokelau">Tokelau</option>
                      <option value="Tonga">Tonga</option>
                      <option value="Trinidad & Tobago">Trinidad & Tobago</option>
                      <option value="Tunisia">Tunisia</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Turkmenistan">Turkmenistan</option>
                      <option value="Turks & Caicos Is">Turks & Caicos Is</option>
                      <option value="Tuvalu">Tuvalu</option>
                      <option value="Uganda">Uganda</option>
                      <option value="United Kingdom">United Kingdom</option>
                      <option value="Ukraine">Ukraine</option>
                      <option value="United Arab Erimates">United Arab Emirates</option>
                      <option value="United States of America">United States of America</option>
                      <option value="Uraguay">Uruguay</option>
                      <option value="Uzbekistan">Uzbekistan</option>
                      <option value="Vanuatu">Vanuatu</option>
                      <option value="Vatican City State">Vatican City State</option>
                      <option value="Venezuela">Venezuela</option>
                      <option value="Vietnam">Vietnam</option>
                      <option value="Virgin Islands (Brit)">Virgin Islands (Brit)</option>
                      <option value="Virgin Islands (USA)">Virgin Islands (USA)</option>
                      <option value="Wake Island">Wake Island</option>
                      <option value="Wallis & Futana Is">Wallis & Futana Is</option>
                      <option value="Yemen">Yemen</option>
                      <option value="Zaire">Zaire</option>
                      <option value="Zambia">Zambia</option>
                      <option value="Zimbabwe">Zimbabwe</option>
                    </select>
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
                <div class="alert alert-success" role="alert">
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
                    <select
                      class="selectpicker dropdown-countries"
                      data-size="7"
                      data-style="btn btn-round"
                      title="Single Select"
                      v-model="form.quantity"
                      @change="onPaymentCal"
                      id="cbxQuantity"
                    >
                      <option value="1" selected>1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                    </select>
                  </div>
                </div>
                <div class="section-space-cus"></div>
                <div class="alert alert-success" role="alert">
                  <div class="container">
                    <div class="alert-icon">
                      <i class="now-ui-icons shopping_delivery-fast"></i>
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
      order: db.collection("order")
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
  },
  methods: {
    onSubmit() {
      if (!this.onValidation()) {
        return;
      }
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
                      amount: {
                        value: totalPayment.toString()
                      }
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
                      }
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
    },
    formatDate(date) {
      var d = new Date(date),
        month = "" + (d.getMonth() + 1),
        day = "" + d.getDate(),
        year = d.getFullYear(),
        hours = d.getHours(),
        minutes = d.getMinutes(),
        seconds = d.getSeconds();

      if (month.length < 2) month = "0" + month;
      if (day.length < 2) day = "0" + day;

      return (
        [day, month, year].join("-") + " " + [hours, minutes, seconds].join(":")
      );
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
</style>
