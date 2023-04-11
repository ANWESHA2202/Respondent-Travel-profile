import Head from "next/head"
import {useState} from "react"
import Page1 from "../../components/page1/Page1";
import Page2 from "../../components/page2/Page2";

function Home() {
    const [entries, setEntries] = useState({step:1,q1:'Metro',q2:'5 - 10 km'});

    const handleChange =input=> (e) => {
        console.log(input,e);
        setEntries({...entries,[input]:e});
    }
    const submitEntries = () => {
        console.log(entries);
        setEntries({...entries,step:2});
    }
    const revisitEntries = () => {
        setEntries({...entries,step:1});
    }
    switch(entries.step){
        case 1:
            return(
                <Page1
                    handleChange={handleChange}
                    submitEntries={submitEntries}
                    entries={entries}
                />
            )  
        case 2:
            return(
                <Page2
                    entries={entries}
                    revisitEntries={revisitEntries}
                />
            )
        default:{
            return(
                <div>Invalid</div>
            )
        }
        
    }
   
}

export default Home