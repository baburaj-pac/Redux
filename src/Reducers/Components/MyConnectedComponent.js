import { ReactReduxContext } from 'react-redux'

// in your connected component
function MyConnectedComponent() {
  return (
    <ReactReduxContext.Consumer>
      {({ store }) => {
        console.log("STORE:" + store);
      }}
    </ReactReduxContext.Consumer>
  )
}
export default MyConnectedComponent;