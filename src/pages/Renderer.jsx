import React from "react";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";

// Create styles
const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FFF",
    padding: 10,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderRightWidth: 0,
    borderBottomWidth: 0,
    margin: 10,
    borderTopWidth: 1,
    borderLeftWidth: 1,
  },
  tr: {
    margin: "auto",
    flexDirection: "row",
  },
  td: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderTopWidth: 0,
  },
  text: {
    margin: 5,
    fontSize: 10,
  },
  pageNumber: {
    position: "absolute",
    bottom: 10,
    right: 10,
    fontSize: 10,
  },
});

function renderTableData() {
  return Array.from({ length: 244 }).map((item, index) => (
    <View>
      <View style={styles.tr} key={index}>
        <View style={styles.td}>
          <Text style={styles.text}>React-PDF</Text>
        </View>
        <View style={styles.td}>
          <Text style={styles.text}>3 User</Text>
        </View>
        <View style={styles.td}>
          <Text style={styles.text}>2019-02-20-202-02-19</Text>
        </View>
        <View style={styles.td}>
          <Text style={styles.text}>5$</Text>
        </View>
      </View>
    </View>
  ));
}
const TextAfterTable = () => {
  return (
    <View>
      <Text>Im the best in the word</Text>
    </View>
  );
};

const renderTable = () => {
  const pageSize = "A4";

  return (
    <Page size={pageSize} style={styles.page}>
      <View>
        <Text>Im the best in the world</Text>
      </View>
    </Page>
  );
};

const renderAll = () => {
  return (
    <>
      {renderPages()} {renderTable()}
    </>
  );
};
function renderPages() {
  const pageSize = "A4";
  const itemsPerPage = 25; // You can adjust this based on your needs
  const totalPages = Math.ceil(244 / itemsPerPage);
  const pages = [];

  for (let pageNumber = 1; pageNumber <= totalPages; pageNumber++) {
    const startIndex = (pageNumber - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const dataForPage = renderTableData().slice(startIndex, endIndex);

    pages.push(
      <Page key={pageNumber} size={pageSize} style={styles.page}>
        <View style={styles.table}>
          <View style={styles.tr}>
            <View style={styles.td}>
              <Text style={styles.text}>Product</Text>
            </View>
            <View style={styles.td}>
              <Text style={styles.text}>Type</Text>
            </View>
            <View style={styles.td}>
              <Text style={styles.text}>Period</Text>
            </View>
            <View style={styles.td}>
              <Text style={styles.text}>Price</Text>
            </View>
          </View>
          {dataForPage}
        </View>
        <Text style={styles.pageNumber}>
          {pageNumber} / {totalPages}
        </Text>
      </Page>
    );
  }

  return pages;
}

function Renderer() {
  return <Document>{renderAll()}</Document>;
}

export default Renderer;
