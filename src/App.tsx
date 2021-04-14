import React, { useEffect } from 'react';
import { Route, withRouter, BrowserRouter, Switch, Redirect, NavLink } from 'react-router-dom';
import { compose } from 'redux';
import { connect, ConnectedProps, Provider } from 'react-redux';
import store, { RootState } from './redux/redux-store';
import './App.css';

// My components
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import UsersSearchContainer from './components/UsersSearch/UsersSearchContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/appReducer';
import Preloader from './components/common/Preloader/Preloader';
import { Layout, Menu, Breadcrumb } from 'antd';
import ChatPage from './pages/Chat';

const { Content, Footer, Sider } = Layout;

// class AppChild extends React.Component {
//   componentDidMount() {
//     this.props.initializeApp();
//   }

//   render() {

type AppHOCPropsType = ConnectedProps<typeof connector>

const AppChild: React.FC<AppHOCPropsType> = ({ initializeApp, initialized }) => {
  useEffect(() => {
    initializeApp();
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    window.addEventListener('unhandledrejection', handleAllErrors)
    return () => {
      window.removeEventListener('unhandledrejection', handleAllErrors)
    }
  }, [])

  const handleAllErrors = (PromiseRejectionEvent: PromiseRejectionEvent) => {
    alert('Oops. Some error occured!')
    console.log(PromiseRejectionEvent)
  }

  if (!initialized) return <Preloader />
  return (

    <Layout>
      <HeaderContainer />
      <Content style={{ padding: '0 50px' }}>
        <Breadcrumb style={{ margin: '16px 0' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Profile</Breadcrumb.Item>
        </Breadcrumb>
        <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
          <Sider className="site-layout-background" width={200}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%' }}
            >
              {/* <SubMenu key="sub1" icon={<UserOutlined />} title="subnav 1"> */}
              <Menu.Item key="1"><NavLink to='/profile' >Profile</NavLink></Menu.Item>
              <Menu.Item key="2"><NavLink to='/dialogs' >Messages</NavLink></Menu.Item>
              <Menu.Item key="3"><NavLink to='/users' >Users</NavLink></Menu.Item>
              <Menu.Item key="4"><NavLink to='/chat' >Chat</NavLink></Menu.Item>
              <Menu.Item key="5"><NavLink to='/news' >News</NavLink></Menu.Item>
              <Menu.Item key="6"><NavLink to='/music' >Music</NavLink></Menu.Item>
              <Menu.Item key="7"><NavLink to='/settings' >Settings</NavLink></Menu.Item>
              {/* </SubMenu> */}
            </Menu>
          </Sider>
          <Content style={{ padding: '0 24px', minHeight: 280 }}>
            <Switch>
              <Route
                exact path='/'
                render={() => <Redirect to='/profile' />}
              />
              <Route
                path='/profile/:userId?'
                render={() => <ProfileContainer />}
              />
              <Route
                path='/dialogs'
                render={() => <DialogsContainer />}
              />
              <Route path='/news' component={News} />
              <Route path='/music' component={Music} />
              <Route path='/login' component={Login} />
              <Route path='/chat' component={ChatPage} />
              <Route
                path='/users'
                render={() => <UsersSearchContainer />}
              />
              <Route path='/settings' component={Settings} />
              <Route path='*' render={() => <div>ERROR 404. The requested page is not found.</div>} />
            </Switch>
          </Content>
        </Layout>
      </Content>
      <Footer style={{ textAlign: 'center' }}>React Social Network ©2019-2021 created by keXXpert</Footer>
    </Layout>

    // <div className='app-wrapper'>
    //   <HeaderContainer />
    //   <Navbar />
    //   <div className='app-wrapper-content'>

    //   </div>
    // </div>

  );
}


let mapStateToProps = (state: RootState) => ({
  initialized: state.app.initialized
})

const connector = connect(mapStateToProps, { initializeApp })

const AppContainer = compose<React.ComponentType>(withRouter, connector)(AppChild)

const App = () => {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </BrowserRouter>
  )
}

export default App;