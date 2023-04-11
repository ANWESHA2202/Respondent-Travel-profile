
import styles from "../../styles/Pages.module.css"
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
import { Radio, RadioGroup } from '@chakra-ui/react'
import { Stack,Button } from "@chakra-ui/react"
function Page1(props) {
    const {handleChange,submitEntries,entries} = props;
  return (
    <div className={styles.page1}>
            <h1 style={{fontSize:'1.5rem',fontWeight:'bold'}}> Respondent Travel profile </h1>
            <div className={styles.form}>
                <FormControl>
                    <FormLabel>
                    Q1: What is your most frequently used means of travel from your home to work location?
                    </FormLabel>
                    <RadioGroup onChange={handleChange('q1')} defaultValue={entries.q1} value={entries.q1}>
                        <Stack spacing='24px'>
                        <Radio value='Bus' iconColor="white" colorScheme="green">Bus</Radio>
                        <Radio value='Metro' colorScheme="green">Metro</Radio>
                        <Radio value='Own Two-wheeler' colorScheme="green">Own Two-wheeler</Radio>
                        <Radio value='Walk / Bicycle' colorScheme="green">Walk / Bicycle</Radio>
                        <Radio value='Auto' colorScheme="green">Auto</Radio>
                        <Radio value='App based ride hailing cab services including Ola / Uber' colorScheme="green">App based ride hailing cab services including Ola / Uber</Radio>
                        </Stack>
                    </RadioGroup>
                </FormControl>
                <FormControl>
                    <FormLabel>
                    Q2: What is the total distance between your home and workplace?
                    </FormLabel>
                    <RadioGroup  onChange={handleChange('q2')} defaultValue={entries.q2} value={entries.q2}>
                        <Stack spacing='24px'>
                        <Radio value='< 5 km' iconColor="white" colorScheme="green">&lt; 5 km</Radio>
                        <Radio value='5 - 10 km' colorScheme="green">5 - 10 km</Radio>
                        <Radio value='10- 15 km' colorScheme="green">10- 15 km</Radio>
                        <Radio value='20- 25 km'colorScheme="green">20- 25 km</Radio>
                        <Radio value='> 25 km' colorScheme="green">&gt; 25 km</Radio>
                        
                        </Stack>
                    </RadioGroup>
                </FormControl>
                <Button colorScheme='green' onClick={submitEntries}>Check Transport Table</Button>
            </div>
        </div>
  );
}

export default Page1;
