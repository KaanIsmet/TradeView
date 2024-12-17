import * as d3 from "d3";
import React, { useEffect, useRef } from "react";

function LinePlot({ data }) {
    const svgRef = useRef();

    useEffect(() => {
        const svg = d3.select(svgRef.current);
        const width = 800;
        const height = 400;
        const margin = { top: 20, right: 30, bottom: 30, left: 50 };

        svg.selectAll("*").remove();

        const x = d3
            .scaleTime()
            .domain(d3.extent(data, (d) => new Date(d.date)))
            .range([margin.left, width - margin.right]);

        const y = d3
            .scaleLinear()
            .domain([0, d3.max(data, (d) => d.close)])
            .nice()
            .range([height - margin.bottom, margin.top]);

        svg.append("g")
            .attr("transform", `translate(0,${height - margin.bottom})`)
            .call(d3.axisBottom(x).tickFormat(d3.timeFormat("%b %Y")));

        svg.append("g")
            .attr("transform", `translate(${margin.left},0)`)
            .call(d3.axisLeft(y));

        const line = d3
            .line()
            .x((d) => x(new Date(d.date)))
            .y((d) => y(d.close));

        svg.append("path")
            .datum(data)
            .attr("fill", "none")
            .attr("stroke", "steelblue")
            .attr("stroke-width", 1.5)
            .attr("d", line);
    }, [data]);

    return <svg ref={svgRef} width={800} height={400}></svg>;
}

export default LinePlot;
