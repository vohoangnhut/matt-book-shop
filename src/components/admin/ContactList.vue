<template>
  <div class="section">
    <div class="container-fluid">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="Contact List" name="first">
          <b-table
            hover
            :items="dataContact"
            id="dataContactTable"
            :per-page="dataContactPerPage"
            :current-page="dataContactCurrentPage"
          >
            <template v-slot:cell(actions)="row">
              <b-button
                size="sm"
                @click="contactInfo(row.item, row.index, $event.target)"
                class="mr-1"
              >Info modal</b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="dataContactCurrentPage"
            :total-rows="rowsDataContact"
            :per-page="dataContactPerPage"
            aria-controls="dataContactTable"
          ></b-pagination>
        </el-tab-pane>
        <el-tab-pane label="Order List" name="second">
          <b-table
            hover
            :items="dataOrder"
            id="dataOrderTable"
            :per-page="dataOrderPerPage"
            :current-page="dataOrderCurrentPage"
          >
            <template v-slot:cell(actions)="row">
              <b-button
                size="sm"
                @click="info(row.item, row.index, $event.target)"
                class="mr-1"
              >Info modal</b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="dataOrderCurrentPage"
            :total-rows="rowsDataOrder"
            :per-page="dataOrderPerPage"
            aria-controls="dataOrderTable"
          ></b-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- Info modal -->
    <b-modal :id="contactModal.id" :title="contactModal.title" ok-only @hide="resetInfoModal">
      <label>First Name</label>
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
      <label>Last Name</label>
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
      <label>Contact No</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons tech_mobile"></i>
          </span>
        </div>
        <input type="text" class="form-control" placeholder="Contact No..." id="contactNo" v-model.trim="customer.contact_no" />
      </div>
      <label>Email</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons ui-1_email-85"></i>
          </span>
        </div>
        <input type="email" class="form-control" placeholder="Email..." id="email" v-model.trim="customer.email" />
      </div>
      <label>Pdpa</label>
      <div class="input-group">
        <input class="form-check-label" type="checkbox" v-model.trim="customer.pdpa" />
      </div>
    </b-modal>
  </div>
</template>
<script>
import { db } from "./../../config/firebaseConfig";
export default {
  name: "ContactList",
  data() {
    return {
      dataContact: [],
      dataOrder: [],
      dataContactPerPage: 5,
      dataContactCurrentPage: 1,
      dataOrderPerPage: 5,
      dataOrderCurrentPage: 1,
      contactModal: {
        id: "info-modal",
        title: ""
      },
      customer: {},
      activeName: 'first'
    };
  },
  created() {
    db.collection("customer")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          var obj = doc.data();
          obj.actions = "";
          this.dataContact.push(obj);
        });
      })
      .catch(error => {
        console.log(error);
      });

    db.collection("order")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          var obj = {};
          var data = doc.data();
          obj.product_name = data.product_name;
          obj.quantity = data.quantity;
          obj.unit_price = data.unit_price;
          obj.shipping_rate = data.shipping_rate;
          obj.total_price = data.total_price;
          obj.total_payment = data.total_payment;
          obj.shippingAddress = data.shipping.address;
          obj.shippingContact_no = data.shipping.contact_no;
          obj.shippingCountry = data.shipping.country;
          obj.shippingEmail = data.shipping.email;
          obj.shippingName = data.shipping.name;
          obj.shippingPostal_code = data.shipping.postal_code;
          obj.orderDate = data.order_date;
          obj.actions = "";
          this.dataOrder.push(obj);
        });
      })
      .catch(error => {
        console.log(error);
      });
  },
  computed: {
    rowsDataContact() {
      return this.dataContact.length;
    },
    rowsDataOrder() {
      return this.dataOrder.length;
    }
  },
  methods: {
    contactInfo(item, index, button) {
      this.contactModal.title = `Row index: ${index}`;
      this.customer = JSON.parse(JSON.stringify(item, null, 2));
      console.log(this.customer);
      this.$root.$emit("bv::show::modal", this.contactModal.id, button);
    }
  }
};
</script>
