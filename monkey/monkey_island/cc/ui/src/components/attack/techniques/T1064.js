import React from 'react';
import ReactTable from 'react-table';
import {getUsageColumns} from './Helpers'
import MitigationsComponent from './MitigationsComponent';


class T1064 extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div>{this.props.data.message_html}</div>
        <br/>
        {this.props.data.scripts.length !== 0 ?
          <ReactTable
            columns={getUsageColumns()}
            data={this.props.data.scripts}
            showPagination={false}
            defaultPageSize={this.props.data.scripts.length}
          /> : ''}
        <MitigationsComponent mitigations={this.props.data.mitigations}/>
      </div>
    );
  }
}

export default T1064;
