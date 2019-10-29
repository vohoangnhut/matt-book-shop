<template>
  <div class="section">
    <div class="container-fluid">
      <el-tabs type="border-card" v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="Contact List" name="first">
          <b-table hover :items="dataContact" id="dataContactTable" :per-page="dataContactPerPage" :current-page="dataContactCurrentPage"></b-table>
          <b-pagination
            v-model="dataContactCurrentPage"
            :total-rows="rowsDataContact"
            :per-page="dataContactPerPage"
            aria-controls="dataContactTable"
          ></b-pagination>
        </el-tab-pane>
        <el-tab-pane label="Order List" name="second">
          <b-table hover :items="dataOrder" id="dataOrderTable" :per-page="dataOrderPerPage" :current-page="dataOrderCurrentPage"></b-table>
          <b-pagination
            v-model="dataOrderCurrentPage"
            :total-rows="rowsDataOrder"
            :per-page="dataOrderPerPage"
            aria-controls="dataOrderTable"
          ></b-pagination>
        </el-tab-pane>
      </el-tabs>
    </div>
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
      dataOrderCurrentPage: 1
    };
  },
  created() {
    db.collection("customer")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.dataContact.push(doc.data());
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
  }
};
</script>
