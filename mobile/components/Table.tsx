import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

// Define the type for the TableComponent props
interface TableComponentProps {
  headerColor: string;
  textColor: string;
  header1: string;
  header2: string;
  row1Col1: string;
  row1Col2: string;
  row2Col1: string;
  row2Col2: string;
  row3Col1: string;
  row3Col2: string;
}

const Table: React.FC<TableComponentProps> = ({
    headerColor,
    textColor,
  header1,
  header2,
  row1Col1,
  row1Col2,
  row2Col1,
  row2Col2,
  row3Col1,
  row3Col2,
}) => {
  return (
    <View style={styles.tableContainer}>
      {/* Table Header */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={[styles.headerText, {color: headerColor}]}>{header1}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={[styles.headerText, {color: headerColor}]}>{header2}</Text>
        </View>
      </View>

      {/* Table Rows */}
      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={[styles.cellText, {color: textColor}]}>{row1Col1}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={[styles.cellText, {color: textColor}]}>{row1Col2}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={[styles.cellText, {color: textColor}]}>{row2Col1}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={[styles.cellText, {color: textColor}]}>{row2Col2}</Text>
        </View>
      </View>

      <View style={styles.row}>
        <View style={styles.cell}>
          <Text style={[styles.cellText, {color: textColor}]}>{row3Col1}</Text>
        </View>
        <View style={styles.cell}>
          <Text style={[styles.cellText, {color: textColor}]}>{row3Col2}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  tableContainer: {
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    overflow: 'hidden',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  cellText: {
    fontSize: 16,
    textAlign: 'center',
  },
});

export default Table;
