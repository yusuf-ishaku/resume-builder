import { Page, View, Text, Document, StyleSheet} from "@react-pdf/renderer";
import { useState } from "react";

const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        backgroundColor: '#E4E4E4',
        width: '50vw',
      },
      section: {
        margin: 10,
        padding: 10,
        flexGrow: 1
    }
})
export const Resume1 = (props) =>{
    const [firstName, setFirstName ] = useState(props.firstName);
    return(
    <Document>
        <Page size={'A4'} style={styles.page}>
            <View style={styles.section}>
                <Text>{props.firstName}</Text>
            </View>
            <View style={styles.section}>
                <Text>Section 2</Text>
            </View>
        </Page>
    </Document>
    )
}