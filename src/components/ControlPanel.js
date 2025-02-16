import React, {PureComponent} from 'react';
import { Card, Button, Progress, Icon } from 'antd';
import 'antd/lib/menu/style/css';
import 'antd/dist/antd.css';

const PM10_MAX = 200;
const PM2_5_MAX = 120;

export default class ControlPanel extends PureComponent {

    getColor = (value)=>{
        if(value < 50){
            return '#6bc926';
        }
        else if(value >= 50 && value < 100){
            return '#d1cf1e';
        }
        else if(value >= 100 && value < 150){
            return '#efbb0f'
        }
        else if(value >= 150 && value < 200){
            return '#ef7120'
        }
        else if(value >= 200 && value < 300){
            return '#ef2a36'
        }
        else{
            return '#9d0028';
        }
    };

    getIcon = (value, color) =>{
        const style={
            float: "left",
            paddingRight: "10px",
            fontSize: "30px",
            color: color,
        };
        if(value < 25){
            return <Icon style={style} type="smile"   />;
        }
        else if(value >= 25 && value < 70){
            return <Icon style={style} type="meh"  />;
        }
        else{
            return <Icon style={style} type="frown"  />;
        }
    };

    renderPMBar(type, value, maks){
        const percent = parseFloat(value)/maks*100;
        const color = this.getColor(value, type);
        return(
            <div>
                {this.getIcon(percent, color)}
                <p>{type} = {value}</p>
                <Progress
                    successPercent={0}
                    strokeColor={color}
                    strokeLinecap={'round'}
                    percent={percent}
                    showInfo={false}
                />
            </div>
        );
    }

    render() {
        return (
            <div style={{ marginTop: "10vh", float: "right", width: "25vw", height: "100%"}}>
                <Card title="Location info --- mean" bordered={false} style={{height: "100%"}}>
                    {this.renderPMBar("PM10", this.props.popupInfo, PM10_MAX)}
                    <Button type="primary" onClick={this.props.onClose}>Hide</Button>
                </Card>
            </div>
        );
    }
}