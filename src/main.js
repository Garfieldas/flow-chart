import mermaid from 'mermaid';
import { createRandomImage } from './img';

const app = document.querySelector('#app');
const title = document.createElement('h1');
const image = document.createElement('img');

window.addEventListener('load', () => {
   app.appendChild(image)
   setInterval(() => {
      createRandomImage(image);
   }, 2000);
})

title.textContent = 'I should better used Python :((((';

mermaid.initialize({ startOnLoad: true });

const chart = `
block-beta
   columns 5
   SampleCollection space SamplePreparation space DataAcquisition
   space space space space space
   DataInterpretation space StatisticalAnalysis space DataPreprocessing
    space space space space space
    Bioinformactics space CandidateBiomarkers space BiomakerBiologicalJustification
    space space space space space
    ClinicalImplementation space space space BiomakerValidation


   SampleCollection --> SamplePreparation
   SamplePreparation --> DataAcquisition
   DataAcquisition --> DataPreprocessing
   DataPreprocessing -->  StatisticalAnalysis
   StatisticalAnalysis --> DataInterpretation 
   Bioinformactics  --> CandidateBiomarkers
   CandidateBiomarkers --> BiomakerBiologicalJustification
   BiomakerBiologicalJustification --> BiomakerValidation
   BiomakerValidation --> ClinicalImplementation
`;

const container = document.createElement('div');
container.className = 'mermaid';
container.innerHTML = chart;
app.appendChild(title)
app.appendChild(container)