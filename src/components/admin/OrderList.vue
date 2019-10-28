<template>
  <div class="wrapper">
    <div class="page-header page-header-small">
      <div
        class="page-header-image"
        data-parallax="true"
        style="background-image: url('/assets/img/bg24.jpg') ;"
      ></div>
      <div class="content-center">
        <div class="row">
          <div class="col-md-8 ml-auto mr-auto text-center">
            <h2 class="title">WeChat Lucky Money</h2>
            <h4>WeChat launched in 2013.</h4>
          </div>
        </div>
      </div>
    </div>
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto">
            <h3 class="title">Contact List</h3>
            <el-table
              :data="tableData.filter(data => !search || (data.email).toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="Product Name" prop="product_name"></el-table-column>
              <el-table-column label="Quantity" prop="quantity"></el-table-column>
              <el-table-column label="Unit Price" prop="unit_price"></el-table-column>
              <el-table-column label="Shipping Rate" prop="shipping_rate"></el-table-column>
              <el-table-column label="Total Price" prop="total_price"></el-table-column>
              <el-table-column label="Total Payment" prop="total_payment"></el-table-column>
              <el-table-column label="Shipping Address" prop="shipping.address"></el-table-column>
              <el-table-column label="Contact No" prop="shipping.contact_no"></el-table-column>
              <el-table-column label="Country" prop="shipping.country"></el-table-column>
              <el-table-column label="Email" prop="shipping.email"></el-table-column>
              <el-table-column label="Name" prop="shipping.name"></el-table-column>
              <el-table-column label="Postal Code" prop="shipping.postal_code"></el-table-column>
              <el-table-column align="right">
                <template slot="header">
                  <el-input v-model="search" size="mini" placeholder="Type to search" />
                </template>
              </el-table-column>
            </el-table>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { db, firebaseAuth } from "./../../config/firebaseConfig";

export default {
  name: "OrderList",
  data() {
    return {
      tableData: [],
      search: ""
    };
  },
  created() {
    db.collection("order")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.tableData.push(doc.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
