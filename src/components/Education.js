import React, { Component } from "react";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";


class Education extends Component {
    render() {
        if (this.props.resumeEducation && this.props.resumeBasicInfo) {
            var sectionName = this.props.resumeBasicInfo.section_name.education;
            var degrees = this.props.resumeEducation.map(function (degree, i) {

                return (
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date={degree.years}
                        iconStyle={{
                            background: "rgb(165 163 163)",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<i className="fas fa-university experience-icon"></i>}
                        key={i}
                    >
                        <div style={{ textAlign: "left", marginBottom: "4px" }}>
                            {degree.school}
                        </div>

                        <h3
                            className="vertical-timeline-element-title"
                            style={{ textAlign: "left" }}
                        >
                            {degree.title}
                        </h3>
                        <h4
                            className="vertical-timeline-element-subtitle"
                            style={{ textAlign: "left" }}
                        >
                            {degree.school}
                        </h4>
                    </VerticalTimelineElement>
                );
            });
        }

        return (
            <section id="education" className="pb-5">
                <div className="col-md-12 mx-auto">
                    <div className="col-md-12">
                        <h1 className="section-title" style={{ color: "black " }}>
                            <span className="text-black" style={{ textAlign: "center" }}>
                                {sectionName}
                            </span>
                        </h1>
                    </div>
                </div>
                <div className="col-md-8 mx-auto">
                    <VerticalTimeline>
                        {degrees}
                        <VerticalTimelineElement
                            iconStyle={{
                                background: "rgb(165 163 163)",
                                color: "#fff",
                                textAlign: "center",
                            }}
                            icon={
                                <i className="fas fa-hourglass-start mx-auto experience-icon"></i>
                            }
                        />
                    </VerticalTimeline>
                </div>
            </section>
        );
    }
}

export default Education;