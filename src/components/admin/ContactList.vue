<template>
  <div class="wrapper">
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto">
            <h3 class="title">Contact List</h3>
            <el-table
              :data="tableData.filter(data => !search || (data.email).toLowerCase().includes(search.toLowerCase()))"
              style="width: 100%"
            >
              <el-table-column label="First Name" prop="first_name"></el-table-column>
              <el-table-column label="Last Name" prop="last_name"></el-table-column>
              <el-table-column label="Email Address" prop="email"></el-table-column>
              <el-table-column label="Contact No" prop="contact_no"></el-table-column>
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
    <div class="section">
      <div class="container">
        <div class="row">
          <div class="col-md-12 ml-auto mr-auto">
            <h3 class="title">Contact List</h3>
            <el-table
              :data="tableDataOrder.filter(data => !search || (data.email).toLowerCase().includes(search.toLowerCase()))"
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
  name: "ContactList",
  data() {
    return {
      tableData: [],
      tableDataOrder: [],
      search: ""
    };
  },
  created() {
    db.collection("customer")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.tableData.push(doc.data());
        });
      })
      .catch(error => {
        console.log(error);
      });

    db.collection("order")
      .get()
      .then(snapshot => {
        snapshot.docs.forEach(doc => {
          this.tableDataOrder.push(doc.data());
        });
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
