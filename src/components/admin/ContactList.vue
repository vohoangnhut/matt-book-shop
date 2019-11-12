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
        <el-tab-pane label="Product List" name="third">
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
            </template>
          </b-table>
          <b-pagination
            v-model="dataProductCurrentPage"
            :total-rows="rowsDataProduct"
            :per-page="dataProductPerPage"
            aria-controls="dataProductTable"
          ></b-pagination>
        </el-tab-pane>
        <el-tab-pane label="User Role List" name="four">
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
      </el-tabs>
    </div>
    <!-- Contact modal -->
    <b-modal :id="contactModal.id" :title="contactModal.title" @ok="saveContactData">
      <label>First Name</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model.trim="customer.first_name" id="firstName"></el-input>
      </div>
      <label>Last Name</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model.trim="customer.last_name" id="lastName"></el-input>
      </div>
      <label>Contact No</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model.trim="customer.contact_no" id="contactNo"></el-input>
      </div>
      <label>Email</label>
      <div class="input-group">
        <el-input placeholder="Please input" v-model.trim="customer.email" id="email"></el-input>
      </div>
      <label>Pdpa</label>
      <div class="input-group">
        <el-checkbox :indeterminate="isIndeterminate" 
        v-model.trim="customer.pdpa" :disabled="adminRole === businessAdmin"></el-checkbox>
      </div>
      <label>Created On</label>
      <div class="input-group">
        <el-input placeholder="Please input" 
        v-model.trim="customer.created" 
        :disabled="adminRole === businessAdmin" id="createdOn"></el-input>
      </div>
    </b-modal>
    <!-- Order modal -->
    <b-modal size="xl" :id="orderModal.id" :title="orderModal.title" @ok="saveOrderData">
      <el-form label-position="left" :inline="true" :model="formInline" class="demo-form-inline" label-width="100px">
        <el-row>
          <el-col :span="12">
            <el-form-item label="Invoice No.">
              <el-input v-model.trim="order.invNo" placeholder="Invoice No." :disabled="adminRole === businessAdmin"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Created On">
              <el-input v-model.trim="order.orderDate" placeholder="Created On" :disabled="adminRole === businessAdmin"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
         <el-row>
          <el-col :span="12">
            <el-form-item label="Name">
              <el-input v-model.trim="order.shippingName" placeholder="Name"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="12">
            <el-form-item label="Country">
              <el-input v-model.trim="order.shippingCountry" placeholder="Country"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>


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
    <!-- Product modal -->
    <b-modal :id="productModal.id" :title="productModal.title" @ok="saveProductData">
      <label>Product Name</label>
      <div class="input-group">
        <el-input placeholder="Product Name" v-model.trim="product.title"></el-input>
      </div>
      <label>Unit Price</label>
      <div class="input-group">
        <el-input placeholder="Unit Price" v-model.trim="product.price"></el-input>
      </div>
    </b-modal>
    <!-- Role modal -->
    <b-modal :id="roleModal.id" :title="roleModal.title" @ok="saveRoleData">
      <label>Email</label>
      <div class="input-group">
        <el-input placeholder="Email"  v-model.trim="role.email" :disabled="adminRole === businessAdmin"></el-input>
      </div>
      <label>Role</label>
      <div class="input-group">
         <el-radio-group v-model.trim="role.roleCode">
          <el-radio-button :label="systemAdmin">System Admin</el-radio-button>
          <el-radio-button :label="businessAdmin">Business Admin</el-radio-button>
      </el-radio-group>
      </div>
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
      dataContactPerPage: 5,
      dataContactCurrentPage: 1,
      dataOrderPerPage: 5,
      dataOrderCurrentPage: 1,
      dataProductPerPage: 5,
      dataProductCurrentPage: 1,
      dataRolePerPage: 5,
      dataRoleCurrentPage: 1,
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
      ],
      dataProductFields: [
        { key: "product_code", sortable: true },
        { key: "title", sortable: true },
        { key: "price", sortable: true },
        { key: "created", sortable: true },
        { key: "actions" }
      ],
      dataRoleFields: [
        { key: "email", sortable: true },
        { key: "role", sortable: true },
        { key: "actions" }
      ]
    };
  },
  created() {
    this.customerDataLoad();
    this.orderDataLoad();
    this.productDataLoad();
    this.roleDataLoad();
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
    productInfo(item, index, button) {
      this.product = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.productModal.id, button);
    },
    roleInfo(item, index, button) {
      this.role = JSON.parse(JSON.stringify(item, null, 2));
      this.$root.$emit("bv::show::modal", this.roleModal.id, button);
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
          this.dataOrder[idx].order_date = this.order.orderDate;
          this.dataOrder[idx].invNo = this.order.invNo;
        });
    },
    saveProductData() {
      db.collection("product")
        .doc(this.product.documentId)
        .update({
          title: this.product.title,
          price: this.product.price
        })
        .then(result => {
          var idx = this.dataProduct.findIndex(
            x => x.documentId === this.product.documentId
          );
          this.dataProduct[idx].title = this.product.title;
          this.dataProduct[idx].price = this.product.price;
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
    deleteRowData(collection, documentId) {
      return new Promise((resolve, reject) => {
        db.collection(collection)
          .doc(documentId)
          .update({
            delt_flag: true
          })
          .then(result => {
            var idx = 0;
            if(collection === 'customer'){
              idx = this.dataContact.findIndex(
                x => x.documentId === documentId
              );
              this.dataContact.splice(idx, 1);
            }else if(collection === 'order'){
              idx = this.dataOrder.findIndex(
                x => x.documentId === documentId
              );
              this.dataOrder.splice(idx, 1);
            }
            resolve(true);
          })
          .catch(error => {
            reject(error); // the request failed
          });
      });
    }
  }
};
</script>
