<template>
  <div class="section">
    <div class="container-fluid">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Contact List" name="first">
          <mdb-datatable :data="data" striped bordered />
        </el-tab-pane>
        <el-tab-pane label="Order List" name="second">
          <mdb-datatable :data="dataOrder" striped bordered />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { db } from "./../../config/firebaseConfig";
import { mdbDatatable } from 'mdbvue';

export default {
  name: "ContactList",
  components: {
      mdbDatatable
  },
  data() {
    return {
      tableData: [],
      tableDataOrder: [],
      search: "",
      data: {
        columns: [
          {field: "first_name", label: "First Name"},
          {field: "last_name", label: "Last Name"},
          {field: "email", label: "Email Address"},
          {field: "contact_no", label: "Contact No"}
        ],
        rows: []
      },
      dataOrder: {
        columns: [
          {field: "product_name", label: "Product Name"},
          {field: "quantity", label: "Quantity"},
          {field: "unit_price", label: "Unit Price"},
          {field: "shipping_rate", label: "Shipping Rate"},
          {field: "total_price", label: "Total Price"},
          {field: "total_payment", label: "Total Payment"},
          {field: "shippingAddress", label: "Shipping Address"},
          {field: "shippingContact_no", label: "Contact No"},
          {field: "shippingCountry", label: "Country"},
          {field: "shippingEmail", label: "Email"},
          {field: "shippingName", label: "Name"},
          {field: "shippingPostal_code", label: "Postal Code"}
        ],
        rows: []
      }
    };
  },
  created() {
    db.collection("customer")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.data.rows.push(doc.data());
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
          this.dataOrder.rows.push(obj);
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
