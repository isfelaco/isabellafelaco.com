import React from "react";
import { Section } from "../components/Section";
import { styled } from "styled-components";

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 25px;
  height: 100%;
  overflow: auto;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  gap: 20px;
  height: 100%;
`;

const GridBox = styled.div`
  background: rgb(255, 255, 255, 0.3);
  border: 1px solid white;
  border-radius: 5px;
  justify-content: center;
  padding: 25px;
  overflow-y: auto;
  li {
    text-align: left;
  }
`;

export default function Coursework() {
  return (
    <Section title="Course Work">
      <Content>
        <Grid>
          <GridBox>
            <h2>Program and Data Representation</h2>
            <ul>
              <li>
                Studied how data is represented in computers, from bits to
                objects, and applied it to different program representations
              </li>
              <li>
                Worked on 11 three-part projects developing small programs to
                implement data structures such as trees, lists, hashes, and
                sorting algorithms in C++, machine language, or assembly code
              </li>
            </ul>
            <a href="https://github.com/isfelaco/CS-2150" target="_blank">
              Link to Repository
            </a>
          </GridBox>
          <GridBox>
            <h2>Advanced Software Development Methods</h2>
            <ul>
              <li>
                Produced a desktop application using the Django 4 framework on
                Python 3 and HTML-based templates
              </li>
              <li>
                Incorporated API’s such as the Google account API and an API
                that stored information from UVa SIS
              </li>
              <li>
                Deployed the website on Heroku using a PostgreSQL database
              </li>
              <li>
                Utilized GitHub’s Continuous Integration and unit testing to
                maintain integrity of the code
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <h2>Internet Scale Applications</h2>
            <ul>
              <li>
                Completed a survey of methods for building large-scale internet
                websites and mobile apps
              </li>
              <li>
                Developed an understanding of performance engineering, scaling,
                security, and large team software engineering
              </li>
              <li>Cumulated in a working scalable online application</li>
            </ul>
          </GridBox>
          <GridBox>
            <h2>Compilers</h2>
            <ul>
              <li>
                Collaborated with peers in pairs to undertake a semester-long
                project written in modern C+
              </li>
              <li>
                Enhanced software development skills by extending an existing
                compiler codebase, documenting code, and creating comprehensive
                test cases
              </li>
              <li>
                Utilized LLVM, one of the industry's leading compiler
                infrastructures, at the core of the clang compiler family
              </li>
            </ul>
            <a href="https://github.com/UVA-CS4620/sipc-felaco" target="_blank">
              Link to Repository
            </a>
          </GridBox>
          <GridBox>
            <h2>Operating Systems</h2>
            <ul>
              <li>
                Gained hands-on experience with essential operating system
                services, including kernel organization, process management,
                scheduling, signals, concurrent programming, memory management,
                file systems, and security
              </li>
              <li>
                Acquired knowledge and skills in memory management, including
                memory allocation and deallocation mechanisms
              </li>
            </ul>
            <a href="https://github.com/isfelaco/CS-4414" target="_blank">
              Link to Repository
            </a>
          </GridBox>
          <GridBox>
            <h2>Linear Algebra</h2>
            <ul>
              <li>
                Explored the applications of matrices in computations and in
                engineering
              </li>
              <li>
                Applied concepts to real-life applications by writing MATLAB
                programs to model traffic flow of an intersection, optimize
                cryptography, and implement the Google Page Rank algorithm, for
                example
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <h2>Machine Learning</h2>
            <ul>
              <li>
                Developed expertise in handling diverse datasets from multiple
                fields and demonstrated the ability to create end-to-end machine
                learning projects using popular open-source libraries, including
                Scikit-Learn, Keras, and TensorFlow
              </li>
              <li>
                Proficiently formulated and applied a wide range of supervised
                and unsupervised machine learning techniques, including linear
                regression, logistic regression, support vector machines,
                decision trees, random forests, boosting, k-means clustering,
                and hierarchical clustering
              </li>
              <li>
                Gained practical experience in artificial neural networks,
                including deep neural networks, convolutional neural networks,
                and recurrent neural networks, using the TensorFlow 2.0 API
              </li>
            </ul>
          </GridBox>
          <GridBox>
            <h2>Data Structures and Algorithms</h2>
            <ul>
              <li>
                Demonstrated proficiency in a wide range of algorithmic
                techniques, including searching algorithms, shortest path
                algorithms, greedy algorithms, backtracking, divide-and-conquer
                strategies, dynamic programming, and machine learning algorithms
              </li>
              <li>
                Developed the ability to analyze and compare algorithm
                performance using various analysis techniques, including
                asymptotic worst-case analysis, expected time analysis, and
                amortized analysis
              </li>
              <li>
                Gained practical knowledge of reductions, which involves
                transforming one computational problem into another to
                facilitate problem-solving and complexity analysis
              </li>
              <li>
                Successfully applied algorithmic techniques to real-world
                problems, fostering critical thinking and problem-solving
                abilities
              </li>
            </ul>
            <a href="https://github.com/isfelaco/CS-3100" target="_blank">
              Link to Repository
            </a>
          </GridBox>
          <GridBox>
            <h2>Computer Architecture</h2>
            <ul>
              <li>
                Developed a deep understanding of computer system organization
                and architecture, including the design and functionality of key
                hardware components
              </li>
              <li>
                Explored memory systems and their hierarchical organization,
                including cache memory, main memory, and secondary storage
              </li>
              <li>
                Studied hardware implementations of virtual memory,
                understanding the mechanisms for managing memory resources
                efficiently
              </li>
            </ul>
            <a href="https://github.com/isfelaco/CS-3330" target="_blank">
              Link to Repository
            </a>
          </GridBox>
        </Grid>
      </Content>
    </Section>
  );
}
