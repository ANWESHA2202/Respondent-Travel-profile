import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import db1 from '../db_JSON/sample_db_0km.json'
import db2 from '../db_JSON/sample_db_5km.json'
import db3 from '../db_JSON/sample_db_10km.json'
import db4 from '../db_JSON/sample_db_15km.json'
import db5 from '../db_JSON/sample_db_20km.json'
import db6 from '../db_JSON/sample_db_25km.json'
import styles from '../../styles/Pages.module.css'

function Page2(props) {
  const {entries,revisitEntries}=props;
  var db=db1.Data[0];
  if(entries.q2=='5 - 10 km') db=db2.Data[0];
  else if(entries.q2=='10 - 15 km') db=db3.Data[0];
  else if(entries.q2=='15 - 20 km') db=db4.Data[0];
  else if(entries.q2=='20 - 25 km') db=db5.Data[0];
  else if(entries.q2=='> 25 km') db=db6.Data[0];
  var finalDB={mode1:'',mode2:'',mode3:'',mode4:'',mode5:'',mode1crowd:'',mode2crowd:'',mode3crowd:'',mode4crowd:'',mode5crowd:'',mode1serv:'',mode2serv:'',mode3serv:'',mode4serv:'',mode5serv:''};
  finalDB.mode1='mode_1';
  finalDB.mode2='mode_2';
  finalDB.mode3='mode_4';
  if(entries.q1=='Own Car') finalDB.mode4='mode_8';
  else if(entries.q1=='Own Two-wheeler') finalDB.mode4='mode_9';
  else finalDB.mode4=`mode_${Math.floor(Math.random() * ((9-8)+1) + 8)}`;
  if(entries.q1=='Auto') finalDB.mode5='mode_7';
  else if(entries.q1=='App based ride hailing cab services including Ola / Uber') finalDB.mode5='mode_5';
  else finalDB.mode5=`mode_${Math.random()>=0.5?5:7}`;

  for(let i=1;i<=5;i++){
    if(db[`${finalDB[`mode${i}`]}.crowd`]==1) finalDB[`mode${i}crowd`]='Many seats available';
    else if(db[`${finalDB[`mode${i}`]}.crowd`]==2) finalDB[`mode${i}crowd`]='Some seats available';
    else if(db[`${finalDB[`mode${i}`]}.crowd`]==3) finalDB[`mode${i}crowd`]='All seats occupied; standing space available';
    else finalDB[`mode${i}crowd`]='Fully crowded or packed';
  }

  for(let i=1;i<=5;i++){
    if(db[`${finalDB[`mode${i}`]}.serv`]==1) finalDB[`mode${i}serv`]='Ordinary';
    else if(db[`${finalDB[`mode${i}`]}.serv`]==2) finalDB[`mode${i}serv`]='Express Non-AC';
    else finalDB[`mode${i}serv`]='Express AC';
  }
  



  return (
    <div>
      <center><h1 style={{marginTop:'15px',fontSize:'1.5rem',fontWeight:'bold'}}>Mode Table</h1></center>
      <TableContainer className={styles.tablecontainer}>
        <Table variant='striped' colorScheme='green' size='sm'>
         
          <Thead>
            <Tr>
              <Th>{db[finalDB.mode1]}</Th>
              <Th>{db[finalDB.mode2]}</Th>
              <Th>{db[finalDB.mode3]}</Th>
              <Th>{db[finalDB.mode4]}</Th>
              <Th>{db[finalDB.mode5]}</Th>
            </Tr>
          </Thead>
          <Tbody>
            {/* <h1 style={{backgroundColor:'teal',position:'relative',left:'80%',color:'white'}}><center>Total travel time spent inside the vehicle(s)</center></h1> */}
            <Tr>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem" style={{fontWeight:'bold'}}>Total travel time spent while inside the vehicle(s)</Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
            </Tr>
            {db['mode_0.trans']==0 || db['mode_1.trans']==0?<Tr>
              <Td size="0.5rem">{db[`${finalDB.mode1}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode2}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode3}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode4}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode5}.ivtt`]}</Td>
            </Tr>:null}
            {db['mode_0.trans']==1 || db['mode_1.trans']==1?<Tr>
              <Td size="0.5rem">{db[`${finalDB.mode1}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode2}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode3}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode4}.ivtt`]}</Td>
              <Td size="0.5rem">{db[`${finalDB.mode5}.ivtt`]}</Td>
            </Tr>:null}
            <Tr>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem" style={{fontWeight:'bold'}}>Total travel time spent outside vehicle(s)</Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
            </Tr>
            <Tr>
              <Th>{db[`${finalDB.mode1}.waittime`]+db[`${finalDB.mode1}.walktime`]}</Th>
              <Th>{db[`${finalDB.mode2}.waittime`]+db[`${finalDB.mode2}.walktime`]}</Th>
              <Th>{db[`${finalDB.mode3}.waittime`]+db[`${finalDB.mode3}.walktime`]}</Th>
              <Th>{db[`${finalDB.mode4}.waittime`]+db[`${finalDB.mode4}.walktime`]}</Th>
              <Th>{db[`${finalDB.mode5}.waittime`]+db[`${finalDB.mode5}.walktime`]}</Th>
            </Tr>
            <Tr>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem" style={{fontWeight:'bold'}}>Possible delay due to traffic congestion or other uncertainties</Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
            </Tr>
            <Tr>
              <Th>{db[`${finalDB.mode1}.tvariab`]}</Th>
              <Th>{db[`${finalDB.mode2}.tvariab`]}</Th>
              <Th>{db[`${finalDB.mode3}.tvariab`]}</Th>
              <Th>{db[`${finalDB.mode4}.tvariab`]}</Th>
              <Th>{db[`${finalDB.mode5}.tvariab`]}</Th>
            </Tr>
            <Tr>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem" style={{fontWeight:'bold'}}>Total one-way cost of travel</Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
            </Tr>
            <Tr>
              <Th>{db[`${finalDB.mode1}.tcost`]}</Th>
              <Th>{db[`${finalDB.mode2}.tcost`]}</Th>
              <Th>{db[`${finalDB.mode3}.tcost`]}</Th>
              <Th>{db[`${finalDB.mode4}.tcost`]}</Th>
              <Th>{db[`${finalDB.mode5}.tcost`]}</Th>
            </Tr>
            <Tr>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem" style={{fontWeight:'bold'}}>Extent of crowding in the vehicle</Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
            </Tr>
            <Tr>
              <Th>{finalDB.mode1crowd}</Th>
              <Th>{finalDB.mode2crowd}</Th>
              <Th>{finalDB.mode3crowd}</Th>
              <Th>{finalDB.mode4crowd}</Th>
              <Th>{finalDB.mode5crowd}</Th>
            </Tr>
            <Tr>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem" style={{fontWeight:'bold'}}>Service type</Td>
              <Td size="0.5rem"></Td>
              <Td size="0.5rem"></Td>
            </Tr>
            <Tr>
              <Th>{finalDB.mode1serv}</Th>
              <Th>{finalDB.mode2serv}</Th>
              <Th>{finalDB.mode3serv}</Th>
              <Th>{finalDB.mode4serv}</Th>
              <Th>{finalDB.mode5serv}</Th>
            </Tr>
          </Tbody>
          
        </Table>
      </TableContainer>
      <div className={styles.page2btn}>
          <Button colorScheme='green' onClick={revisitEntries}>Revisit Quizes</Button>
      </div>
    </div>
  );
}

export default Page2;
