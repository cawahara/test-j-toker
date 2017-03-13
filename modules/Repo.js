import React from 'react'
import Checkbox from 'material-ui/Checkbox';

const StylesOverridingInlineExample = () => (
  <Checkbox
    name="StylesOverridingInlineExample"
    label="Checked the mail"
    style={{
      width: '50%',
      margin: '0 auto',
      border: '2px solid #FF9800',
      backgroundColor: '#ffd699',
    }}
  />
);

export default React.createClass({

  render() {
    const { userName, repoName } = this.props.params
    return (
      <div>
        <h2>{userName} / {repoName}</h2>
        <StylesOverridingInlineExample />
        <Checkbox label="Checked the mail" />
      </div>
    )
  }
})
