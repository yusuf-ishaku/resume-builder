import { Page, View, Text, Document, StyleSheet, Image} from "@react-pdf/renderer";
import { useState } from "react";
import Ajoy from "../assets/ajoy.jpg"
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        // backgroundColor: '#E4E4E4',
        width: '50vw',
    },
    section: {       
        flexGrow: 1,
        width: '40%',
        backgroundColor: 'blue',
        // backgroundColor: 'red'
    },
  
})
export const Resume1 = (props) =>{
    const [firstName, setFirstName ] = useState(props.firstName);
    return(
    <Document>
        <Page size={'A4'} style={styles.page}>
            <View style={styles.section}>
                <Image
                src={Ajoy}>

                </Image>
                <View style={{padding: 10}}>
                    <Text style={{color: 'white', textTransform: 'uppercase'}}
                    >{props.firstName !== '' ? 
                    props.firstName : 
                    "Stephen Colbert"
                    }</Text>
                    <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                        {props.role !== '' ? 
                        props.role : 
                        'Developer advocate'
                        } 
                    </Text>
                    <View>

                    </View>
                    <View>

                    </View>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>
            </View>
            <View style={{...styles.section, width: '60%', backgroundColor: 'blue', padding: 5}}>
                <Text>Section 2</Text>
            </View>
        </Page>
    </Document>
    )
}