<template>
  <div class="wrapper">
    <div class="page-header page-header-mini">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image: url('/assets/img/home/Sentosa Day.jpg');"
      ></div>
    </div>
    <div class="main">
      <div class="contact-content">
        <div class="container">
          
          <div class="col-md-7 ml-auto mr-auto">
            <h2 class="title">Checklist</h2>
          </div>

          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" style="margin-top: 15px;">
              <a href="https://www.dropbox.com/sh/7ebhwpt27fqpbbl/AADQUZWrIH40CsDar7u1QC36a/Upload%20Documents/Checklist/Landlord%20-%20HDB%20flat.pdf?dl=0" target="_blank">Landlord - HDB Flat</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" style="margin-top: 15px;">
              <a href="https://www.dropbox.com/sh/7ebhwpt27fqpbbl/AABoGenL4ahm65jKAnwoYAoDa/Upload%20Documents/Checklist/Landlord%20-%20Private%20residential%20property.pdf?dl=0" target="_blank">Landlord - Private Residential Property</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" style="margin-top: 15px;">
              <a href="https://www.dropbox.com/sh/7ebhwpt27fqpbbl/AABW84ZilKNbLuwh_69MHtDda/Upload%20Documents/Checklist/Lease%20-%20Compliance%20to%20women%2039%20s%20charter%20%26%20immigration%20act%20%28version-2%29.pdf?dl=0" target="_blank">Lease - Compliance to Women 39 S Charter & Immigration Act (version-2)</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" style="margin-top: 15px;">
              <a href="https://www.dropbox.com/sh/7ebhwpt27fqpbbl/AAA820pBJukHZqHgBTZhEbX7a/Upload%20Documents/Checklist/Tenant%20-%20HDB%20flat.pdf?dl=0" target="_blank">Tenant - HDB Flat</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" style="margin-top: 15px;">
              <a href="https://www.dropbox.com/sh/7ebhwpt27fqpbbl/AABnQZoobPWYXY4cdZ_nhy9ma/Upload%20Documents/Checklist/Tenant%20-%20Private%20residential%20property.pdf?dl=0" target="_blank">Tenant - Private Residential Property</a>
            </div>
          </div>
            

          <div class="col-md-7 ml-auto mr-auto">
            <h2 class="title">Tenancy Agreement Template</h2>
          </div>

          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" style="margin-top: 15px;">
              <a href="https://www.dropbox.com/sh/7ebhwpt27fqpbbl/AABGlzHyhvMwIb22nu8_S_2aa/Upload%20Documents/Tenancy%20Agreement%20Template/HDB%20flats.pdf?dl=0" target="_blank">HDB Flats</a>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto mr-auto" style="margin-top: 15px;margin-bottom: 30px;">
              <a href="https://www.dropbox.com/sh/7ebhwpt27fqpbbl/AABIb6V43U4vwZe0NGMAF9jca/Upload%20Documents/Tenancy%20Agreement%20Template/Private%20residential%20properties.pdf?dl=0" target="_blank">Private Residential Properties</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="contactUs2Map" class="big-map"></div>
  </div>
</template>
<script>
import firebase from "../config/firebaseConfig";
import axios from "axios";

export default {
  name: "Contact",
  data() {
    return {
      ref: firebase.firestore().collection("customer"),
      customer: {}
    };
  },
  methods: {
    onSubmit(e) {
      e.preventDefault();

      this.customer.created = this.formatDate(this.calcTime("Singapore", "+8"));
      this.customer.delt_flag = false;

      if (!this.onValidation(e)) {
        return;
      }
      

      this.ref
        .add(this.customer)
        .then(() => {
          axios
            .get(
              "https://us-central1-book-store-sg-x.cloudfunctions.net/sendMail?to=" +
                "book.store.sg.x@gmail.com" +
                "&subject=" +
                "Contact" +
                "&body=" +
                this.customer.first_name +
                " - " +
                this.customer.last_name
            )
            .then(function(response) {
              console.log(response);
            })
            .catch(function(error) {
              // handle error
              console.log(error);
            });
          this.customer.contact_no = "";
          this.customer.email = "";
          this.customer.first_name = "";
          this.customer.last_name = "";
          this.customer.pdpa = "";
          this.$swal({
            type: "success",
            title: "Thank you !",
            html: "We will be keeping in touch with you shortly"
          });
        })
        .catch(error => {
          alert("Error adding document: ", error);
        });
    },
    onCancel(e) {
      e.preventDefault();
      this.customer.contact_no = "";
      this.customer.email = "";
      this.customer.first_name = "";
      this.customer.last_name = "";
      this.customer.pdpa = "";
    },
    onValidation(e) {
      e.preventDefault();
      var message = "";
      var flag = true;

      if (!this.customer.contact_no) {
        message += "Contact No. is mandatory !" + "<br/>";
        flag = false;
      }

      if (!this.customer.email) {
        message += "Email is mandatory !" + "<br/>";
        flag = false;
      }

      if (!this.customer.first_name) {
        message += "First Name is mandatory !" + "<br/>";
        flag = false;
      }

      if (!this.customer.last_name) {
        message += "Last Name is mandatory !" + "<br/>";
        flag = false;
      }

      if (!this.customer.pdpa) {
        message += "PDPA consent is mandatory !" + "<br/>";
        flag = false;
      }

      if (!flag) {
        this.$swal({
          type: "warning",
          title: "Warning",
          html: message
        });
      }

      return flag;
    },
    calcTime(city, offset) {
      var d = new Date();
      var utc = d.getTime() + d.getTimezoneOffset() * 60000;
      var nd = new Date(utc + 3600000 * offset);
      return nd;
    }
  }
};
</script>
