import styled from 'styled-components/native'
import { Fonts, Colors, Metrics } from 'Constants';

const McBoldText = styled.Text`
    color: ${props => props.color || Colors.black};
    font-size: ${props => props.size || Metrics.s16}px;
    text-align: ${props => props.align || 'left'};
    fontFamily: ${Fonts.type.bold}
`
export default McBoldText;