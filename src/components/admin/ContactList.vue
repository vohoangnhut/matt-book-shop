<template>
  <div class="section">
    <div class="container-fluid">
      <el-tabs type="border-card" v-model="activeName">
        <el-tab-pane label="Transaction Record" name="first">
          <b-button size="sm" @click="refresh(2)" class="mr-1" variant="info">Refresh</b-button>
          <b-button size="sm" @click="exportData(2)" class="mr-1" variant="info">Export Excel</b-button>
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
                variant="info"
              >Update</b-button>
              <b-button
                size="sm"
                @click="confirmDelete(row.item, row.index, $event.target, 'order')"
                class="mr-1"
                variant="danger"
              >Delete</b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="dataOrderCurrentPage"
            :total-rows="rowsDataOrder"
            :per-page="dataOrderPerPage"
            aria-controls="dataOrderTable"
          ></b-pagination>
        </el-tab-pane>

        <el-tab-pane label="Contact Record" name="second">
          <b-button size="sm" @click="refresh(1)" class="mr-1" variant="info">Refresh</b-button>
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
                variant="info"
              >Update</b-button>
              <b-button
                size="sm"
                @click="confirmDelete(row.item, row.index, $event.target, 'customer')"
                class="mr-1"
                variant="danger"
              >Delete</b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="dataContactCurrentPage"
            :total-rows="rowsDataContact"
            :per-page="dataContactPerPage"
            aria-controls="dataContactTable"
          ></b-pagination>
        </el-tab-pane>

        <el-tab-pane label="Product Inventory" name="third">
          <b-button size="sm" @click="refresh(3)" class="mr-1" variant="info">Refresh</b-button>
          <b-table
            hover
            :items="dataProduct"
            id="dataContactTable"
            :per-page="dataProductPerPage"
            :current-page="dataProductCurrentPage"
            :fields="dataProductFields"
          >
            <template v-slot:cell(actions)="row">
              <b-button
                size="sm"
                @click="productInfo(row.item, row.index, $event.target)"
                class="mr-1"
                variant="info"
              >Update</b-button>
              <b-button
                size="sm"
                @click="logInfo(row.item, row.index, $event.target)"
                class="mr-1"
                variant="info"
              >View Log</b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="dataProductCurrentPage"
            :total-rows="rowsDataProduct"
            :per-page="dataProductPerPage"
            aria-controls="dataProductTable"
          ></b-pagination>
        </el-tab-pane>
        <el-tab-pane label="Sys User Mgnt" name="four">
          <b-button size="sm" @click="refresh(4)" class="mr-1" variant="info">Refresh</b-button>
          <b-table
            hover
            :items="dataRole"
            id="dataRoleTable"
            :per-page="dataRolePerPage"
            :current-page="dataRoleCurrentPage"
            :fields="dataRoleFields"
          >
            <template v-slot:cell(actions)="row">
              <b-button
                size="sm"
                @click="roleInfo(row.item, row.index, $event.target)"
                class="mr-1"
                variant="info"
              >Update</b-button>
            </template>
          </b-table>
          <b-pagination
            v-model="dataRoleCurrentPage"
            :total-rows="rowsDataRole"
            :per-page="dataRolePerPage"
            aria-controls="dataRoleTable"
          ></b-pagination>
        </el-tab-pane>
        <el-tab-pane label="Sys Log" name="five">
          <b-button size="sm" @click="refresh(5)" class="mr-1" variant="info">Refresh</b-button>
          <b-table
            hover
            :items="dataLog"
            id="dataLogTable"
            :per-page="dataLogPerPage"
            :current-page="dataLogCurrentPage"
            :fields="dataLogFields"
          >
            <template v-slot:cell(old)="data">
              <span v-html="data.value"></span>
            </template>
            <template v-slot:cell(new)="data">
              <span v-html="data.value"></span>
            </template>
          </b-table>
          <b-pagination
            v-model="dataLogCurrentPage"
            :total-rows="rowsDataLog"
            :per-page="dataLogPerPage"
            aria-controls="dataLogTable"
          ></b-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
    <!-- Contact modal -->
    <b-modal :id="contactModal.id" :title="contactModal.title" @ok="saveContactData">
      <label>First Name</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model="customer.first_name" id="firstName"></el-input>
      </div>
      <label>Last Name</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model="customer.last_name" id="lastName"></el-input>
      </div>
      <label>Contact No</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model="customer.contact_no" id="contactNo"></el-input>
      </div>
      <label>Email</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model="customer.email" id="email"></el-input>
      </div>
      <label>Pdpa</label>
      <div class="input-group">
        <el-checkbox v-model="customer.pdpa" :disabled="adminRole === businessAdmin"></el-checkbox>
      </div>
      <label>Created On</label>
      <div class="input-group">
        <el-date-picker
          style="width:100%"
          :disabled="adminRole === businessAdmin"
          v-model="customer.created"
          type="datetime"
          placeholder="Select date and time"
          format="dd-MM-yyyy hh:mm:ss"
          value-format="dd-MM-yyyy hh:mm:ss"
        ></el-date-picker>
      </div>
    </b-modal>
    <!-- Order modal -->
    <b-modal size="xl" :id="orderModal.id" :title="orderModal.title" @ok="saveOrderData">
      <el-form label-position="right" class="demo-form-inline" label-width="120px">
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Invoice No.">
              <el-input
                v-model="order.invNo"
                placeholder="Invoice No."
                :disabled="adminRole === businessAdmin"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Created On">
              <el-date-picker
                style="width:100%"
                :disabled="adminRole === businessAdmin"
                v-model="order.orderDate"
                type="datetime"
                placeholder="Select date and time"
                format="dd-MM-yyyy hh:mm:ss"
                value-format="dd-MM-yyyy hh:mm:ss"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Name">
              <el-input v-model="order.shippingName" placeholder="Name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Country">
              <!-- <el-input v-model="order.shippingCountry" placeholder="Country"></el-input> -->
              <el-select v-model="order.shippingCountry" style="width:100%" placeholder="Country">
                <el-option
                  v-for="item in countryOptions"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="Address">
            <el-input
              type="textarea"
              placeholder="Please input"
              v-model="order.shippingAddress"
              show-word-limit
            ></el-input>
          </el-form-item>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Postal Code">
              <el-input v-model="order.shippingPostal_code" placeholder="Postal Code"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Contact No.">
              <el-input v-model="order.shippingContact_no" placeholder="Contact No."></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Email">
              <el-input v-model="order.shippingEmail" placeholder="Email"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Product Name">
              <el-input v-model="order.product_name" placeholder="Product Name"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Unit Price">
              <el-input v-model="order.unit_price" placeholder="Unit Price"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Quantity">
              <el-input-number style="width:100%" v-model="order.quantity" :min="1" :max="10"></el-input-number>
              <!-- <el-input v-model="order.quantity" placeholder="Quantity"></el-input> -->
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Total Price">
              <el-input v-model="order.total_price" placeholder="Total Price"></el-input>
            </el-form-item>
          </el-col>
          <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
            <el-form-item label="Shipping Rate">
              <el-input v-model="order.shipping_rate" placeholder="Shipping Rate"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item label="Total Payment">
            <el-input v-model="order.total_payment" placeholder="Total Payment"></el-input>
          </el-form-item>
        </el-row>
      </el-form>
    </b-modal>
    <!-- Product modal -->
    <b-modal :id="productModal.id" :title="productModal.title" @ok="saveProductData">
      <label>Product Name</label>
      <div class="input-group">
        <el-input placeholder="Product Name" v-model="product.title"></el-input>
      </div>
      <label>Unit Price</label>
      <div class="input-group">
        <el-input placeholder="Unit Price" v-model="product.price"></el-input>
      </div>
    </b-modal>
    <!-- Role modal -->
    <b-modal :id="roleModal.id" :title="roleModal.title" @ok="saveRoleData">
      <label>Email</label>
      <div class="input-group">
        <el-input placeholder="Email" v-model="role.email" :disabled="adminRole === businessAdmin"></el-input>
      </div>
      <label>Role</label>
      <div class="input-group">
        <el-radio-group v-model="role.roleCode">
          <el-radio-button :label="systemAdmin">System Admin</el-radio-button>
          <el-radio-button :label="businessAdmin">Business Admin</el-radio-button>
        </el-radio-group>
      </div>
    </b-modal>
    <!-- View Log modal -->
    <b-modal :id="viewLogModal.id" :title="viewLogModal.title" ok-only scrollable>
      <b-row class="bv-example-row">
        <b-col>Old</b-col>
        <b-col>New</b-col>
      </b-row>
      <b-row v-for="itemLog in logInfoList" :key="itemLog">
        <b-col>
          <span v-html="itemLog.old"></span>
        </b-col>
        <b-col>
          <span v-html="itemLog.new"></span>
        </b-col>
      </b-row>
    </b-modal>
  </div>
</template>
<script>
import { db } from "./../../config/firebaseConfig";
import firebase from "./../../config/firebaseConfig";
export default {
  name: "ContactList",
  data() {
    return {
      adminRole: "",
      systemAdmin: "sa",
      businessAdmin: "ba",
      dataContact: [],
      dataOrder: [],
      dataProduct: [],
      dataRole: [],
      dataLog: [],
      dataContactPerPage: 10,
      dataContactCurrentPage: 1,
      dataOrderPerPage: 10,
      dataOrderCurrentPage: 1,
      dataProductPerPage: 10,
      dataProductCurrentPage: 1,
      dataRolePerPage: 10,
      dataRoleCurrentPage: 1,
      dataLogPerPage: 10,
      dataLogCurrentPage: 1,
      contactModal: {
        id: "contact-modal",
        title: "Contact Update Data"
      },
      orderModal: {
        id: "order-modal",
        title: "Order Update Data"
      },
      productModal: {
        id: "product-modal",
        title: "Product Update Data"
      },
      roleModal: {
        id: "role-modal",
        title: "Role Update Data"
      },
      viewLogModal: {
        id: "view-log-modal",
        title: "View Log"
      },
      customer: {},
      order: {},
      product: {},
      role: {},
      activeName: "first",
      sortByContact: "created",
      sortDescContact: true,
      sortByOrder: "orderDate",
      sortDescOrder: true,
      dataContactFields: [
        { key: "created", sortable: true, formatter: "formatDate" },
        { key: "first_name", sortable: true },
        { key: "last_name", sortable: true },
        { key: "contact_no", sortable: true },
        { key: "email", sortable: true },
        { key: "pdpa", sortable: true },
        { key: "actions" }
      ],
      dataOrderFields: [
        { key: "invNo", sortable: true, label: "Invoice No." },
        { key: "orderDate", sortable: true, label: "Order Date & Time", formatter: "formatDate" },
        { key: "shippingName", sortable: true, label: "Name" },
        { key: "shippingCountry", sortable: true },
        { key: "shippingAddress", sortable: true },
        { key: "shippingPostal_code", sortable: true },
        { key: "shippingContact_no", sortable: true },
        { key: "shippingEmail", sortable: true },
        { key: "product_name", sortable: true },
        { key: "unit_price", sortable: true },
        { key: "quantity", sortable: true },
        { key: "total_price", sortable: true, label: "Sub Total" },
        { key: "shipping_rate", sortable: true },
        { key: "total_payment", sortable: true },
        { key: "actions" }
      ],
      dataProductFields: [
        { key: "product_code", sortable: true },
        { key: "title", sortable: true },
        { key: "price", sortable: true },
        { key: "created", sortable: true },
        { key: "updated", sortable: true },
        { key: "actions" }
      ],
      dataRoleFields: [
        { key: "email", sortable: true },
        { key: "role", sortable: true },
        { key: "actions" }
      ],
      dataLogFields: [
        { key: "updated", sortable: true },
        { key: "updated_by", sortable: true },
        { key: "product_code", sortable: true },
        { key: "old", sortable: true },
        { key: "new", sortable: true }
      ],
      countryOptions: [],
      oldObj: {},
      user: firebase.auth().currentUser,
      logInfoList: []
    };
  },
  created() {
    this.customerDataLoad();
    this.orderDataLoad();
    this.productDataLoad();
    this.roleDataLoad();
    this.logDataLoad();

    this.getAllCountries().then(result => {
      this.countryOptions = result;
    });
  },
  computed: {
    rowsDataContact() {
      return this.dataContact.length;
    },
    rowsDataOrder() {
      return this.dataOrder.length;
    },
    rowsDataProduct() {
      return this.dataProduct.length;
    },
    rowsDataRole() {
      return this.dataRole.length;
    },
    rowsDataLog() {
      return this.dataLog.length;
    }
  },
  methods: {
    contactInfo(item, index, button) {
      this.customer = JSON.parse(JSON.stringify(item, null, 2));
      this.oldObj = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.contactModal.id, button);
    },
    orderInfo(item, index, button) {
      this.order = JSON.parse(JSON.stringify(item, null, 2));
      this.oldObj = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.orderModal.id, button);
    },
    productInfo(item, index, button) {
      this.product = JSON.parse(JSON.stringify(item, null, 2));
      this.oldObj = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.productModal.id, button);
    },
    roleInfo(item, index, button) {
      this.role = JSON.parse(JSON.stringify(item, null, 2));
      this.oldObj = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.roleModal.id, button);
    },
    logInfo(item, index, button) {
      var obj = JSON.parse(JSON.stringify(item, null, 2));
      //this.log = JSON.parse(JSON.stringify(item, null, 2));
      this.getLogList(obj.documentId).then(() => {
        this.$root.$emit("bv::show::modal", this.viewLogModal.id, button);
      });
    },
    confirmDelete(item, index, button, collection) {
      this.$swal({
        title: "Do you want to delete?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Delete",
        cancelButtonText: "Cancel",
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then(result => {
        if (result.value) {
          var data = JSON.parse(JSON.stringify(item, null, 2));
          this.deleteRowData(collection, data.documentId).then(result => {
            this.$swal("Deleted!", "Data has been deleted", "success");
          });
        }
      });
    },
    saveContactData() {
      db.collection("customer")
        .doc(this.customer.documentId)
        .update({
          contact_no: this.customer.contact_no,
          email: this.customer.email,
          first_name: this.customer.first_name,
          last_name: this.customer.last_name,
          pdpa: this.customer.pdpa,
          created: this.customer.created
        })
        .then(result => {
          var idx = this.dataContact.findIndex(
            x => x.documentId === this.customer.documentId
          );
          this.dataContact[idx].first_name = this.customer.first_name;
          this.dataContact[idx].last_name = this.customer.last_name;
          this.dataContact[idx].contact_no = this.customer.contact_no;
          this.dataContact[idx].email = this.customer.email;
          this.dataContact[idx].pdpa = this.customer.pdpa;
          this.dataContact[idx].created = this.customer.created;
          this.writeLog(this.oldObj, this.customer, "customer", "update").then(
            () => {
              this.$swal("Saved!", "Data has been saved", "success");
            }
          );
        });
    },
    saveOrderData() {
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
          var idx = this.dataOrder.findIndex(
            x => x.documentId === this.order.documentId
          );
          this.dataOrder[idx].product_name = this.order.product_name;
          this.dataOrder[idx].quantity = this.order.quantity;
          this.dataOrder[idx].unit_price = this.order.unit_price;
          this.dataOrder[idx].shipping_rate = this.order.shipping_rate;
          this.dataOrder[idx].total_price = this.order.total_price;
          this.dataOrder[idx].total_payment = this.order.total_payment;
          this.dataOrder[idx].shippingAddress = this.order.shippingAddress;
          this.dataOrder[
            idx
          ].shippingContact_no = this.order.shippingContact_no;
          this.dataOrder[idx].shippingCountry = this.order.shippingCountry;
          this.dataOrder[idx].shippingEmail = this.order.shippingEmail;
          this.dataOrder[idx].shippingName = this.order.shippingName;
          this.dataOrder[
            idx
          ].shippingPostal_code = this.order.shippingPostal_code;
          this.dataOrder[idx].orderDate = this.order.orderDate;
          this.dataOrder[idx].invNo = this.order.invNo;
          this.writeLog(this.oldObj, this.order, "order", "update").then(() => {
            this.$swal("Saved!", "Data has been saved", "success");
          });
        });
    },
    saveProductData() {
      db.collection("product")
        .doc(this.product.documentId)
        .update({
          title: this.product.title,
          price: this.product.price,
          updated: this.calcTime("Singapore", "+8"),
          updated_by: this.user.email
        })
        .then(result => {
          var idx = this.dataProduct.findIndex(
            x => x.documentId === this.product.documentId
          );
          this.dataProduct[idx].title = this.product.title;
          this.dataProduct[idx].price = this.product.price;
          this.writeLog(this.oldObj, this.product, "product", "update").then(
            () => {
              this.$swal("Saved!", "Data has been saved", "success");
            }
          );
        });
    },
    saveRoleData() {
      db.collection("role")
        .doc(this.role.documentId)
        .update({
          email: this.role.email,
          role: this.role.roleCode
        })
        .then(result => {
          var idx = this.dataRole.findIndex(
            x => x.documentId === this.role.documentId
          );
          this.dataRole[idx].email = this.role.email;
          this.dataRole[idx].role =
            this.role.roleCode === this.systemAdmin
              ? "System Admin"
              : "Business Admin";
          this.dataRole[idx].roleCode = this.role.roleCode;
          this.adminRole = this.role.roleCode;
          this.writeLog(this.oldObj, this.role, "role", "update").then(() => {
            this.$swal("Saved!", "Data has been saved", "success");
          });
        });
    },
    customerDataLoad() {
      this.dataContact = [];
      db.collection("customer")
        .where("delt_flag", "==", false)
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            var obj = doc.data();
            obj.actions = "";
            obj.created = this.getDate(obj.created);
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
        .where("delt_flag", "==", false)
        .get()
        .then(snapshot => {
          let count = 0;
          snapshot.docs.forEach(doc => {
            count++;
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
            obj.orderDate = this.getDate(data.order_date);
            obj.invNo = data.inv_no.date + data.inv_no.no;
            obj.actions = "";
            obj.documentId = doc.id;
            this.dataOrder.push(obj);

            if(count === snapshot.docs.length){
              this.dataOrder.sort(function(a, b){return b.order_date - a.order_date});
            }
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    productDataLoad() {
      this.dataProduct = [];
      db.collection("product")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            var obj = {};
            var data = doc.data();
            obj.product_code = data.product_code;
            obj.title = data.title;
            obj.price = data.price;
            obj.created = data.created;
            obj.actions = "";
            obj.documentId = doc.id;
            obj.updated = data.updated;
            this.dataProduct.push(obj);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    roleDataLoad() {
      this.dataRole = [];
      var user = firebase.auth().currentUser;
      db.collection("role")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            var obj = {};
            var data = doc.data();
            if (data.email === user.email) this.adminRole = data.role;
            obj.email = data.email;
            obj.role =
              data.role === this.systemAdmin
                ? "System Admin"
                : "Business Admin";
            obj.roleCode = data.role;
            obj.actions = "";
            obj.documentId = doc.id;
            this.dataRole.push(obj);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    logDataLoad() {
      this.dataLog = [];
      db.collection("log")
        .where("target", "==", "product")
        .get()
        .then(snapshot => {
          snapshot.docs.forEach(doc => {
            var obj = doc.data();
            obj.old =
              "Name: " +
              obj.oldVal.title +
              "<br/>" +
              "Price: " +
              obj.oldVal.price;
            obj.new =
              "Name: " +
              obj.newVal.title +
              "<br/>" +
              "Price: " +
              obj.newVal.price;
              obj.product_code = obj.oldVal.product_code;
            this.dataLog.push(obj);
          });
        })
        .catch(error => {
          console.log(error);
        });
    },
    deleteRowData(collection, documentId) {
      return new Promise((resolve, reject) => {
        db.collection(collection)
          .doc(documentId)
          .update({
            delt_flag: true
          })
          .then(result => {
            var idx = 0;
            if (collection === "customer") {
              idx = this.dataContact.findIndex(
                x => x.documentId === documentId
              );
              this.dataContact.splice(idx, 1);
            } else if (collection === "order") {
              idx = this.dataOrder.findIndex(x => x.documentId === documentId);
              this.dataOrder.splice(idx, 1);
            }
            resolve(true);
          })
          .catch(error => {
            reject(error); // the request failed
          });
      });
    },
    refresh(index) {
      if (index === 1) {
        // Customer List
        this.customerDataLoad();
      } else if (index === 2) {
        // Order List
        this.orderDataLoad();
      } else if (index === 3) {
        // Product List
        this.productDataLoad();
      } else if (index === 4) {
        // Role List
        this.roleDataLoad();
      } else if (index === 5) {
        // Log List
        this.logDataLoad();
      }
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v =>
        filterVal.map(j => {
          return v[j];
        })
      );
    },
    exportData(index) {
      if (index === 1) {
        // Customer List
      } else if (index === 2) {
        // Order List
        import("@/vendor/Export2Excel").then(excel => {
          const tHeader = [
            "Inv No",
            "Order Date",
            "Shipping Name",
            "Shipping Country",
            "Shipping Address",
            "Shipping Postal Code",
            "Shipping Contact No",
            "Shipping Email",
            "Product Name",
            "Unit Price",
            "Quantity",
            "Total Price",
            "Shipping Rate",
            "Total Payment"
          ];
          const filterVal = [
            "invNo",
            "orderDate",
            "shippingName",
            "shippingCountry",
            "shippingAddress",
            "shippingPostal_code",
            "shippingContact_no",
            "shippingEmail",
            "product_name",
            "unit_price",
            "quantity",
            "total_price",
            "shipping_rate",
            "total_payment"
          ];
          const data = this.formatJson(filterVal, this.dataOrder);
          excel.export_json_to_excel({
            header: tHeader,
            data,
            filename: "Order List"
          });
        });
      } else if (index === 3) {
        // Product List
      } else if (index === 4) {
        // Role List
      } else if (index === 4) {
        // Log List
      }
    },
    calcTime(city, offset) {
      var d = new Date();
      var utc = d.getTime() + d.getTimezoneOffset() * 60000;
      var nd = new Date(utc + 3600000 * offset);
      return nd;
    },
    writeLog(oldVal, newVal, target, action) {
      return new Promise((resolve, reject) => {
        db.collection("log")
          .add({
            oldVal: oldVal,
            newVal: newVal,
            action: action,
            created: this.calcTime("Singapore", "+8"),
            created_by: this.user.email,
            updated: this.calcTime("Singapore", "+8"),
            updated_by: this.user.email,
            target: target
          })
          .then(() => {
            resolve();
          })
          .catch(error => {
            reject(error); // the request failed
          });
      });
    },
    getLogList(documentId) {
      return new Promise((resolve, reject) => {
        this.logInfoList = [];
        db.collection("log")
          .where("oldVal.documentId", "==", documentId)
          .where("newVal.documentId", "==", documentId)
          .orderBy('updated', 'desc')
          .get()
          .then(snapshot => {
            snapshot.docs.forEach(doc => {
              var obj = doc.data();
              obj.old =
                "<b>" + this.formatDate(obj.updated) + "</b>" +
                "<br/>" +
                "Product Code: " +
                obj.oldVal.product_code +
                "<br/>" +
                "Name: " +
                obj.oldVal.title +
                "<br/>" +
                "Price: " +
                obj.oldVal.price;
              obj.new =
                "<br/>" +
                "Product Code: " +
                obj.newVal.product_code +
                "<br/>" +
                "Name: " +
                obj.newVal.title +
                "<br/>" +
                "Price: " +
                obj.newVal.price;
              this.logInfoList.push(obj);
            });
            resolve();
          })
          .catch(error => {
            reject(error); // the request failed
          });
      });
    },
    getDate(date){
      let dateVal = date.split(' ')[0].split('-');
      let timeVal = date.split(' ')[1];

      return new Date(dateVal[2] + '/' + dateVal[1] + '/' + dateVal[0] + ' ' + timeVal);
    }
  }
};
</script>


<style>
.width100per {
  display: block;
}
</style>