import * as React from "react";
import  { SplitViewPane } from "react-uwp/SplitView";
import {
    SplitView,
    AutoSuggestBox,
    CalendarDatePicker,
    DropDownMenu,
    TextBox,
    Button,
    IconButton
} from "react-uwp";
import HomeStyle from './Home.scss'
import axios from 'axios'
export default class Home extends React.Component {
    constructor(){
        super()

        this.state = {
            expanded: false
        }
        this.onDetail = this.onDetail.bind(this)
        this.getList = this.getList.bind(this)
        this.getList()
    }

    onDetail(item){
        let {expanded} = this.state
        // this.getLog()
        console.log(item)
        this.setState({
            expanded: !expanded,
            detail: item
        })
    }

    getList(){
        axios.get('//localhost:3030/getList',{
           params: {
               id: '123'
           }
        }).then(res=>{
            let list = []
            let {data} = res
            for(let index in data ){
                list.push(JSON.parse(data[index]))
            }
            this.setState({
                list
            })
        }).catch(err=>{

        })
    }

    render() {
        let {
            onDetail,

        } = this
        let {
            expanded,
            list=[],
            detail={}
        } = this.state


        return (
            <div>
                <SplitView
                    displayMode='compact'
                    defaultExpanded={expanded}
                    style={{
                        height: 'calc(100vh - 60px)',
                        backgroundColor: 'transparent',
                        overflowY: 'auto'
                    }}
                    expandedWidth={440}
                    onClosePane={() => {
                        this.setState({ expanded: false });
                    }}
                >
                <div className={HomeStyle.wrapper}>
                    <div className={HomeStyle.tools}>
                        <span>过滤：</span>
                        <div>
                            <div className={HomeStyle.flex}>
                                <TextBox
                                    placeholder="TextBox with PlaceHolder"
                                />
                                <Button>搜索</Button>
                                <Button>高级搜索</Button>

                            </div>
                            <div style={{marginTop: '10px',width: '100%'}}>
                                <DropDownMenu
                                    values={["错误类型", "A", "a"]}
                                />
                                <div style={{display:'inline-block',  marginLeft: '20px'}}>
                                    <CalendarDatePicker/>
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className={HomeStyle.table}>
                        <table>
                            <thead>
                                <tr>
                                    <th>索引</th>
                                    <th>错误类型</th>
                                    <th>时间</th>
                                </tr>
                            </thead>
                            <tbody>
                            {
                                list.map((item,index)=>(
                                    <tr key={index} onClick={onDetail.bind(this,item)} title='查看详情'>
                                        <td>{item.id}</td>
                                        <td>{item.type}</td>
                                        <td>{item.create_at}</td>
                                    </tr>
                                ))
                            }
                            </tbody>

                        </table>
                    </div>
                </div>
                <div>
                </div>
                    <SplitViewPane style={{background: '#2e2e2e'}}>
                        <div style={{padding: '20px'}}>
                            <div className={HomeStyle.itemLabel}>
                                <div className={HomeStyle.label}>索引</div>
                                <div className={HomeStyle.textarea}>{detail.id}</div>
                            </div>
                            <div className={HomeStyle.itemLabel}>
                                <div className={HomeStyle.label}>时间</div>
                                <div className={HomeStyle.textarea}>{detail.create_at}</div>
                            </div>
                            <div className={HomeStyle.itemLabel}>
                                <div className={HomeStyle.label}>错误类型</div>
                                <div className={HomeStyle.textarea}>{detail.type}</div>
                            </div>
                            <div className={HomeStyle.itemLabel}>
                                <div className={HomeStyle.label}>错误详情</div>
                                <div className={HomeStyle.textarea}>{detail.errInfo}</div>
                            </div>
                            <div className={HomeStyle.itemLabel}>
                                <div className={HomeStyle.label}>打印数据</div>
                                <div className={HomeStyle.textarea}>{detail.log}</div>
                            </div>
                        </div>
                    </SplitViewPane>
                </SplitView>
            </div>
        )
    }
}