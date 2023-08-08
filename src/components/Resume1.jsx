import { Page, View, Text, Document, StyleSheet, Image} from "@react-pdf/renderer";
import { useEffect, useState } from "react";
// import { UserInputs } from "../App";
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
        // backgroundColor: 'blue',
        // backgroundColor: 'red'
    },
  
})
export const Resume1 = (props) =>{
    // const { user } = useContext(UserInputs);
    const [userValue, setUserValue] = useState(props.user);
    useEffect(() =>{
        console.log(props.user);
        setUserValue(props.user)
    },[])
   
    return(
    <Document>
        <Page size={'A4'} style={styles.page}>
            <View style={{...styles.section, backgroundColor: 'blue'}}>
                <Image
                src={Ajoy}>

                </Image>
                <View style={{padding: 10}}>
                    <Text style={{color: 'white', textTransform: 'uppercase'}}
                    >{userValue.firstName? 
                        userValue.firstName
                    : 
                    "Stephen Colbert"
                    }</Text>
                    <Text style={{marginVertical: 4,fontWeight: 'light', color: 'black', fontSize: '18px', textTransform: 'capitalize'}}>
                     
                    </Text>
                    <View style={{marginTop: 5}}>
                        <Text style={{color: 'white'}}>
                         
                        </Text>
                        <Text style={{color: 'white', marginVertical: 10}}>
                          
                        </Text>
                    </View>
                    <View>

                    </View>
                    <View>

                    </View>
                    <View>

                    </View>
                </View>
            </View>
            <View style={{...styles.section, width: '60%',padding: 5}}>
                <Text>Section 2</Text>
            </View>
        </Page>
    </Document>
    )
}