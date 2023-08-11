import { Page, View, Text, Document, StyleSheet, Image} from "@react-pdf/renderer";

import { useSelector }  from "react-redux";
import Ajoy from "../assets/ajoy.jpg"
import { useEffect } from "react";
import { SkillLine } from "./skillLine";
const styles = StyleSheet.create({
    page: {
        flexDirection: 'row',
        // backgroundColor: '#E4E4E4',
        width: '100%',
    },
    section: {       
        flexGrow: 1,
        width: '40%',
        // backgroundColor: 'blue',
        // backgroundColor: 'red'
    },
  
})
export const Resume1 = ({user}) =>{
    // const { user } = useContext(UserInputs);
    // const user = useSelector((state) => state.user);
    // let user = useSelector(state => state.user);
    console.log(user);
    useEffect(() =>{
        console.log('ready')
    })
    return(
    <Document>
        <Page size={'A4'} style={styles.page}>
            <View style={{...styles.section, backgroundColor: 'blue'}}>
                <Image
                src={Ajoy}>

                </Image>
                <View style={{padding: 10}}>
                    <Text style={{color: 'white', textTransform: 'uppercase'}}
                    >
                        {user.name ? user.name : "Stephen Colbert"}
                    </Text>
                    <Text style={{marginVertical: 4,fontWeight: 'light', color: 'black', fontSize: '18px', textTransform: 'capitalize'}}>
                     {user.role ? user.role : "Front End Developer"}
                    </Text>
                    <View style={{marginTop: 10}}>
                        {user.infos && user.infos.map((x,y) =>{
                            return (
                                <SkillLine prop ={x.type}></SkillLine>
                            )
                        })}
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