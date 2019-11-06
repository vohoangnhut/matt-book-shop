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
            :sort-by.sync="sortByContact"
            :sort-desc.sync="sortDescContact"
            :fields="dataContactFields"
          >
            <template v-slot:cell(actions)="row">
              <b-button
                size="sm"
                @click="contactInfo(row.item, row.index, $event.target)"
                class="mr-1"
              >Info</b-button>
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
            :sort-by.sync="sortByOrder"
            :sort-desc.sync="sortDescOrder"
            :fields="dataOrderFields"
          >
            <template v-slot:cell(actions)="row">
              <b-button
                size="sm"
                @click="orderInfo(row.item, row.index, $event.target)"
                class="mr-1"
              >Info</b-button>
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
    <b-modal :id="contactModal.id" :title="contactModal.title" @ok="saveContactData">
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
        <input
          type="text"
          class="form-control"
          placeholder="Contact No..."
          id="contactNo"
          v-model.trim="customer.contact_no"
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
          placeholder="Email..."
          id="email"
          v-model.trim="customer.email"
        />
      </div>
      <label>Pdpa</label>
      <div class="input-group">
        <input class="form-check-label" type="checkbox" v-model.trim="customer.pdpa" />
      </div>
    </b-modal>
    <!-- Info modal -->
    <b-modal :id="orderModal.id" :title="orderModal.title" @ok="saveOrderData">
      <label>Invoice No.</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.invNo" />
      </div>
      <label>Created On</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.orderDate" />
      </div>
      <label>Name</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.shippingName" />
      </div>
      <label>Country</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.shippingCountry" />
      </div>
      <label>Address</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.shippingAddress" />
      </div>
      <label>Postal Code</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.shippingPostal_code" />
      </div>
      <label>Contact No.</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.shippingContact_no" />
      </div>
      <label>Email</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.shippingEmail" />
      </div>
      <label>Product Name</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.product_name" />
      </div>
      <label>Unit Price</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.unit_price" />
      </div>
      <label>Quantity</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.quantity" />
      </div>
      <label>Total Price</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.total_price" />
      </div>
      <label>Shipping Rate</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.shipping_rate" />
      </div>
      <label>Total Payment</label>
      <div class="input-group">
        <div class="input-group-prepend">
          <span class="input-group-text">
            <i class="now-ui-icons users_circle-08"></i>
          </span>
        </div>
        <input type="text" class="form-control" v-model.trim="order.total_payment" />
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
        id: "contact-modal",
        title: "Contact Update Data"
      },
      orderModal: {
        id: "order-modal",
        title: "Order Update Data"
      },
      customer: {},
      order: {},
      activeName: "first",
      sortByContact: "created",
      sortDescContact: true,
      sortByOrder: "orderDate",
      sortDescOrder: true,
      dataContactFields: [
        { key: "created", sortable: true },
        { key: "first_name", sortable: true },
        { key: "last_name", sortable: true },
        { key: "contact_no", sortable: true },
        { key: "email", sortable: true },
        { key: "pdpa", sortable: true },
        { key: "actions" }
      ],
      dataOrderFields: [
        { key: "invNo", sortable: true },
        { key: "orderDate", sortable: true },
        { key: "shippingName", sortable: true },
        { key: "shippingCountry", sortable: true },
        { key: "shippingAddress", sortable: true },
        { key: "shippingPostal_code", sortable: true },
        { key: "shippingContact_no", sortable: true },
        { key: "shippingEmail", sortable: true },
        { key: "product_name", sortable: true },
        { key: "unit_price", sortable: true },
        { key: "quantity", sortable: true },
        { key: "total_price", sortable: true },
        { key: "shipping_rate", sortable: true },
        { key: "total_payment", sortable: true },
        { key: "actions" }
      ]
    };
  },
  created() {
    this.customerDataLoad();
    this.orderDataLoad();
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
      this.customer = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.contactModal.id, button);
    },
    orderInfo(item, index, button) {
      this.order = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.orderModal.id, button);
    },
    saveContactData() {
      db.collection("customer")
        .doc(this.customer.documentId)
        .update(this.customer)
        .then(result => {
          this.customerDataLoad();
        });
    },
    saveOrderData() {
      console.log(this.order.documentId);
      db.collection("order")
        .doc(this.order.documentId)
        .update({
          product_name: this.order.product_name,
          quantity: this.order.quantity,
          unit_price: this.order.unit_price,
          shipping_rate: this.order.shipping_rate,
          total_price: this.order.total_price,
          total_payment: this.order.total_payment,
          shipping: {
            address: this.order.shippingAddress,
            contact_no: this.order.shippingContact_no,
            country: this.order.shippingCountry,
            email: this.order.shippingEmail,
            name: this.order.shippingName,
            postal_code: this.order.shippingPostal_code
          },
          order_date: this.order.orderDate,
          inv_no: {
            date: this.order.invNo.substring(0, 6),
            no: this.order.invNo.substring(6, this.order.invNo.length)
          }
    })
        .then(result => {
          this.orderDataLoad();
        });
    },
    customerDataLoad() {
      this.dataContact = [];
      db.collection("customer")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            var obj = doc.data();
            obj.actions = "";
            obj.documentId = doc.id;
            this.dataContact.push(obj);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    orderDataLoad() {
      this.dataOrder = [];
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
            obj.invNo = data.inv_no.date + data.inv_no.no;
            obj.actions = "";
            obj.documentId = doc.id;
            this.dataOrder.push(obj);
          });
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
</script>
