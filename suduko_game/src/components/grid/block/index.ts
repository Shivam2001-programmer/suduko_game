import React,{FC} from 'react';
import {useSelector,useDispatch} from 'react-scripts'
import {Dispatch, AnyAction}  from 'redux';

import { IReducer } from '../../../reducers';
import { N } from '../../../typings';

const Block:FC<IProps> = ({colIndex, rowIndex})=>{
    const slate = useSelector<IReduce, ISlate>(({grid})=>{
        value:N;
    }
}

const Block: FC<IProps> ={(colIndex, rowIndex)} =>[
    const state = useSelector<IReducer, IState>(((grid))=>{
        value:grid ? grid[rowIndex][colIndex]:0
    })
]

return (
    <Container data cy=[`block ${rowIndex}-${colIndex}`]>
       {slate.value === 0 ? "": state.value}
    </Container>
)


export default Block;