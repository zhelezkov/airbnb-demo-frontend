import React from 'react';
import Rheostat from 'rheostat';
import styled from 'styled-components';
import { letterFrequency } from '@vx/mock-data';
import { Group } from '@vx/group';
import { Bar } from '@vx/shape';
import { scaleLinear, scaleBand } from '@vx/scale';

const Handle = styled.div`
  background: white none;
  border-radius: 100%;
  border: 1px solid #008489;
  cursor: pointer;
`;

const ProgressBar = styled.div`
  background: #008489;
  height: 6px;
`;

const Histogram = ({ className }) => {
  const barsData = letterFrequency;

  const width = 300;
  const height = 100;

  const xMax = width;
  const yMax = height;

  const x = d => d.letter;
  const y = d => +d.frequency * 100;

  const xScale = scaleBand({
    rangeRound: [0, xMax],
    domain: barsData.map(x),
  });
  const yScale = scaleLinear({
    rangeRound: [yMax, 0],
    domain: [0, Math.max(...barsData.map(y))],
  });

  const compose = (scale, accessor) => data => scale(accessor(data));
  const xPoint = compose(xScale, x);
  const yPoint = compose(yScale, y);

  return (
    <svg width={width} height={height} className={className}>
      {barsData.map((bar) => {
        const barHeight = yMax - yPoint(bar);
        return (
          <Group key={`bar-${x(bar)}`}>
            <Bar
              x={xPoint(bar)}
              y={yMax - barHeight}
              height={barHeight}
              width={xScale.bandwidth()}
              fill="#D8D8D8"
            />
          </Group>
        );
      })}
    </svg>
  );
};

const HistogramAligned = styled(Histogram)`
  margin-bottom: -6px;
`;

const PriceRange = styled.p`
  font-weight: 100;
  margin-top: 1rem;
  margin-bottom: 0.5rem;
`;

const Description = styled.p`
  font-weight: 100;
  font-size: 0.85rem;
  margin-bottom: 1rem;
`;

const Wrapper = styled.div`
  margin-left: 1rem;
  margin-right: 1rem;
`;

export default ({ onChange, min, max }) => (
  <React.Fragment>
    <PriceRange>$10 – $1000+</PriceRange>
    <Description>The average nightly price is $75.</Description>
    <HistogramAligned />
    <Wrapper>
      <Rheostat
        handle={Handle}
        progressBar={ProgressBar}
        onChange={onChange}
        values={[min, max]}
        min={10}
        max={1000}
      />
    </Wrapper>
  </React.Fragment>
);
