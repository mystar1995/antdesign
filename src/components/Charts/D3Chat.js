import React,{Component} from 'react';
import {BarChart} from 'react-d3-components';
import styles from './index.less';
class D3Chart extends Component {


  render() {
    const {
        height,
        title,
        forceFit = true,
        color = 'rgba(24, 144, 255, 0.85)',
        padding,
      } = this.props;
  
  
      const scale = {
        x: {
          type: 'cat',
        },
        y: {
          min: 0,
        },
      };
  
      const tooltip = [
        'x*y',
        (x, y) => ({
          name: x,
          value: y,
        }),
      ];
   
    var data = [{
        label: 'somethingA',
        values: [{x: 'SomethingA', y: 10}, {x: 'SomethingB', y: 4}, {x: 'SomethingC', y: 3}]
    }];
    return (
      <div className={styles.chart} style={{ height }} ref={this.handleRoot}>
        <div ref={this.handleRef}>
          {title && <h4 style={{ marginBottom: 20 }}>{title}</h4>}
          <BarChart
            data={data}
            width={400}
            height={400}
            margin={{top: 10, bottom: 50, left: 50, right: 10}}/>
        </div>
      </div>
    );
  }
}

export default D3Chart;
