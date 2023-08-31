import Annotation, { PointSelector } from 'react-image-annotation-with-zoom';
import { useState } from "react";

type Annotation = { geometry: any; data: any; }

export function ImageAnnotator() {
  const [annotations, setAnnotations] = useState<Annotation[]>([])
  const [annotation, setAnnotation] = useState<Annotation | {}>({})


  function onChange(note: Annotation) {
    setAnnotation(note);
  };

  function onSubmit(note: Annotation) {
    const { geometry, data } = note;

    setAnnotation({});
    setAnnotations(prev => [...prev,
    {
      geometry,
      data: {
        ...data,
        id: Math.random(),
      },
    }]);
  }

  return (
    <Annotation
      src="https://arweave.net/BT5nPvSKt5QV3GsI2lzXFWuqa38wkF-WSTa9YIRgr2s"
      alt="Two pebbles anthropomorphized holding hands"
      annotations={annotations}
      type="POINT"
      value={annotation}
      onChange={onChange}
      onSubmit={onSubmit}
      movingMode
    />
  );
}