import React from 'react'
import ReactDOM from 'react-dom'
import { Theme as UWPThemeProvider, getTheme } from "react-uwp/Theme";
import Menu, { MenuItem } from "react-uwp/Menu";
import Icon from "react-uwp/Icon";
import TextBox from "react-uwp/TextBox";
import AppRouter from './router/index'
import AppStyle from './App.scss'
ReactDOM.render(
    <UWPThemeProvider
        // theme={getTheme({
        //     themeName: "Light",
        //     accent: "#0078D7",
        //     useFluentDesign: true,
        //     desktopBackgroundImage:'https://www.react-uwp.com/HEAD/static/images/dark-40.1vqE3.png'
        // })}
    >
        <div className={AppStyle.layout}>
            <header>
                <div className={AppStyle.logoBox}>
                    <div className={AppStyle.logo}>
                        Watcher
                    </div>
                    <div className={AppStyle.search}>
                        <TextBox

                            placeholder="TextBox with PlaceHolder"
                            rightNode={<Icon style={{marginRight: '10px'}}>SearchboxLegacy</Icon>}
                        />
                    </div>

                </div>
            </header>
            <section>
                <div>
                    <Menu menuItemHeight={36} expandedMethod="hover">
                        <MenuItem
                            icon="CameraLegacy"
                            label="概览"
                        />
                        <MenuItem
                            icon="Copy"
                            label="实时监控"
                        />
                        <MenuItem
                            icon="Copy"
                            label="日志"
                        />
                    </Menu>
                </div>
                <div className={AppStyle.content}>
                    <AppRouter/>
                </div>
            </section>
            <footer>

            </footer>
        </div>
    </UWPThemeProvider>,
    document.getElementById('app')
)