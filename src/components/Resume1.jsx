import { Page, View, Text, Document, StyleSheet, Image} from "@react-pdf/renderer";

import { CiLocationOn } from 'react-icons/ci';
import { CiMail } from "react-icons/ci";
import { CiGlobe } from "react-icons/ci";
import {BsTelephone} from "react-icons/bs";

// import { SkillLine } from "./skillLine";

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
            <View style={{...styles.section, backgroundColor: 'rgb(96 165 250)'}}>
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
                        <span>
                            <SkillLine address={true}></SkillLine>
                            {user.address ?   
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                                {user.address}
                            </Text> 
                            : 
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                                99 Worthington's lane
                            </Text>
                        }
                        </span>
                       
                        {user.tel ?   
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                                {user.tel}
                            </Text> 
                            : 
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                               +123 456 789 01
                            </Text>
                        }
                        {user.email ?   
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                                {user.email}
                            </Text> 
                            : 
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                               example@example.com
                            </Text>
                        }
                        {user.web ?   
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'capitalize'}}>
                                
                                {user.web}
                            </Text> 
                            : 
                            <Text style={{marginVertical: 4,fontWeight: 'light', color: 'white', fontSize: '18px', textTransform: 'lowercase'}}>
                               www.exampledomain.com
                            </Text>
                        }
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