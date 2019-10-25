<template>
  <div class="wrapper">
    <div class="page-header page-header-mini">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image:  url('/assets/img/bg45.jpg');"
      ></div>
    </div>
    <div class="main">
      <div class="contact-content">
        <div class="container">
          <div class="row">
            <div class="col-md-5 ml-auto mr-auto">
              <h2 class="title">Contact Information</h2>
              <p class="description">
                (<i class="required-label">*</i> : Required information)
                <br />
              </p>
              <form @submit="onSubmit">
                <label>First Name:<i class="required-label">*</i></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your First Name..."
                    aria-label="Your First Name..."
                    id="firstName"
                    v-model.trim="customer.first_name"
                  />
                </div>
                <label>Last Name:<i class="required-label">*</i></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons users_circle-08"></i>
                    </span>
                  </div>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Your Last Name..."
                    aria-label="Your Last Name..."
                    id="lastName"
                    v-model.trim="customer.last_name"
                  />
                </div>
                <label>Contact No:<i class="required-label">*</i></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons tech_mobile"></i>
                    </span>
                  </div>
                  <input type="text" class="form-control" placeholder="Contact No..." id="contactNo" v-model.trim="customer.contact_no" />
                </div>
                <label>Email:<i class="required-label">*</i></label>
                <div class="input-group">
                  <div class="input-group-prepend">
                    <span class="input-group-text">
                      <i class="now-ui-icons ui-1_email-85"></i>
                    </span>
                  </div>
                  <input type="email" class="form-control" placeholder="Email..." id="email" v-model.trim="customer.email" />
                </div>
                <div class="form-check" style="margin-top: 15px;">
                  <label class="form-check-label">
                      <input class="form-check-label" type="checkbox" v-model.trim="customer.pdpa" />
                      <span class="form-check-sign"></span>
                      By submitting the above details in this form, you are agreeing to us contacting you. We will maintain confidentiality of all personal particulars provided.
                  </label>
                </div>
                <div class="submit text-center">
                  <input
                    type="submit"
                    class="btn btn-primary btn-raised btn-round"
                    value="Continue"
                    style="margin-right: 15px;"
                  />
                  <input
                    type="button"
                    class="btn btn-second btn-raised btn-round"
                    value="Cancel"
                    @click="onCancel"
                    style="margin-left: 15px;"
                  />
                </div>
              </form>
            </div>
            <div class="col-md-5 ml-auto mr-auto">
              <div class="info info-horizontal mt-5">
                <div class="icon icon-primary">
                  <i class="now-ui-icons location_pin"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Find us at the office</h4>
                  <p>
                    Bld Mihail Kogalniceanu, nr. 8,
                    <br />7652 Bucharest,
                    <br />Romania
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="now-ui-icons tech_mobile"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Give us a ring</h4>
                  <p>
                    Michael Jordan
                    <br />+40 762 321 762
                    <br />Mon - Fri, 8:00-22:00
                  </p>
                </div>
              </div>
              <div class="info info-horizontal">
                <div class="icon icon-primary">
                  <i class="business_briefcase-24 now-ui-icons"></i>
                </div>
                <div class="description">
                  <h4 class="info-title">Legal Information</h4>
                  <p>
                    Creative Tim Ltd.
                    <br />VAT &middot; EN2341241
                    <br />IBAN &middot; EN8732ENGB2300099123
                    <br />Bank &middot; Great Britain Bank
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contactUs2Map" class="big-map"></div>
  </div>
</template>
<script>
import firebase from './../config/firebaseConfig'

export default {
  name: 'Contact',
  data () {
    return {
      ref: firebase.firestore().collection('customer'),
      customer: {}
    }
  },
  methods: {
    onSubmit (e) {
      e.preventDefault();

      if (!this.onValidation(e)) {
        return;
      }
      this.ref.add(this.customer).then(() => {
        this.customer.contact_no = ''
        this.customer.email = ''
        this.customer.first_name = ''
        this.customer.last_name = ''
        this.customer.pdpa = ''
      })
        .catch((error) => {
          alert('Error adding document: ', error);
        });
    },
    onCancel (e) {
      e.preventDefault();
      this.customer.contact_no = ''
      this.customer.email = ''
      this.customer.first_name = ''
      this.customer.last_name = ''
      this.customer.pdpa = ''
      document.getElementById('errorMessage').style.display = 'none';
    },
    onValidation (e) {
      e.preventDefault();
      var message = '';
      var flag = true;

      if (!this.customer.contact_no) {
        message += 'Contact No.' + '<br/>';
        flag = false;
      }

      if (!this.customer.email) {
        message += 'Email' + '<br/>';
        flag = false;
      }

      if (!this.customer.first_name) {
        message += 'First Name' + '<br/>';
        flag = false;
      }

      if (!this.customer.last_name) {
        message += 'Last Name' + '<br/>';
        flag = false;
      }

      if (!this.customer.pdpa) {
        message += 'PDPA consent' + '<br/>';
        flag = false;
      }
      this.$swal({
        type: 'error',
        title: 'Please input',
        html: message,
        });
      return flag;
    }
  }
};
</script>
