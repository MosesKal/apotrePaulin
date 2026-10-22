"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { Icon } from "@/components/icon";

const photographs = [
  {
    id: "priere",
    src: "/images/ministry/priere.jpg",
    alt: "L’Apôtre Paulin Mambwe en prière, les bras ouverts, lors d’un culte.",
    caption: "Un temps de prière",
    category: "Rencontres",
    width: 2048,
    height: 1364,
  },
  {
    id: "predication",
    src: "/images/ministry/predication.jpg",
    alt: "L’Apôtre Paulin Mambwe s’adresse à l’assemblée, un microphone à la main.",
    caption: "La Parole partagée",
    category: "Enseignement",
    width: 1366,
    height: 2048,
  },
  {
    id: "transmission",
    src: "/images/ministry/transmission.jpg",
    alt: "L’Apôtre Paulin Mambwe enseigne à côté d’un pupitre portant une Bible ouverte.",
    caption: "Au cœur des Écritures",
    category: "Enseignement",
    width: 1366,
    height: 2048,
  },
  {
    id: "culte",
    src: "/images/ministry/culte.jpg",
    alt: "L’Apôtre Paulin Mambwe sourit, les mains levées, derrière un pupitre lors d’un culte.",
    caption: "La joie de se retrouver",
    category: "Rencontres",
    width: 1080,
    height: 720,
  },
] as const;

const filters = ["Tous", "Enseignement", "Rencontres"] as const;
type Filter = (typeof filters)[number];

export function MinistryGallery() {
  const [filter, setFilter] = useState<Filter>("Tous");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const openerRef = useRef<HTMLButtonElement | null>(null);
  const visiblePhotographs = photographs.filter((photo) => filter === "Tous" || photo.category === filter);
  const selectedIndex = visiblePhotographs.findIndex((photo) => photo.id === selectedId);
  const selectedPhoto = visiblePhotographs[selectedIndex];
  const isOpen = selectedId !== null;

  useEffect(() => {
    if (!isOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    if (!dialog.open) dialog.showModal();

    return () => {
      if (dialog.open) dialog.close();
      document.body.style.overflow = previousOverflow;
      if (openerRef.current?.isConnected) openerRef.current.focus({ preventScroll: true });
    };
  }, [isOpen]);

  function navigate(direction: number) {
    const nextIndex = (selectedIndex + direction + visiblePhotographs.length) % visiblePhotographs.length;
    setSelectedId(visiblePhotographs[nextIndex].id);
  }

  return (
    <section className="section wrap gallery-section" id="en-images" aria-labelledby="gallery-heading">
      <div className="gallery-toolbar">
        <div>
          <p className="eyebrow">Instants de ministère</p>
          <h2 id="gallery-heading">Le ministère, <em>en images.</em></h2>
        </div>
        <div className="gallery-filters" role="group" aria-label="Filtrer les photographies">
          {filters.map((item) => (
            <button
              key={item}
              type="button"
              className="gallery-filter"
              aria-pressed={filter === item}
              aria-controls="ministry-gallery-grid"
              onClick={() => setFilter(item)}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="gallery-grid" id="ministry-gallery-grid">
        {visiblePhotographs.map((photo) => (
          <button
            key={photo.id}
            type="button"
            className={`gallery-item gallery-item-${photo.id}`}
            aria-label={`Agrandir la photo : ${photo.caption}`}
            aria-haspopup="dialog"
            onClick={(event) => {
              openerRef.current = event.currentTarget;
              setSelectedId(photo.id);
            }}
          >
            <span className="gallery-image">
              <Image
                src={photo.src}
                alt={photo.alt}
                fill
                sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 30vw"
              />
              <span className="gallery-expand" aria-hidden="true">
                <Icon name="expand" />
              </span>
            </span>
            <span className="gallery-caption">
              <span>{photo.caption}</span>
              <span className="gallery-category">{photo.category}</span>
            </span>
          </button>
        ))}
      </div>

      <dialog
        ref={dialogRef}
        className="gallery-dialog"
        aria-label="Photographies du ministère"
        onCancel={(event) => {
          event.preventDefault();
          setSelectedId(null);
        }}
        onClose={() => setSelectedId(null)}
        onClick={(event) => {
          if (event.target === event.currentTarget) setSelectedId(null);
        }}
        onKeyDown={(event) => {
          if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
            event.preventDefault();
            navigate(event.key === "ArrowLeft" ? -1 : 1);
          }
        }}
      >
        {selectedPhoto && (
          <div className="gallery-dialog-inner">
            <button type="button" className="gallery-close" aria-label="Fermer la photographie" onClick={() => setSelectedId(null)} autoFocus>
              <Icon name="close" />
            </button>
            <button type="button" className="gallery-prev" aria-label="Photographie précédente" onClick={() => navigate(-1)}>
              <Icon name="chevron-left" />
            </button>
            <figure>
              <Image
                className="gallery-full-image"
                src={selectedPhoto.src}
                alt={selectedPhoto.alt}
                width={selectedPhoto.width}
                height={selectedPhoto.height}
                sizes="(max-width: 900px) 94vw, 1100px"
              />
              <figcaption className="gallery-lightbox-caption" aria-live="polite" aria-atomic="true">
                <span>{selectedPhoto.caption}</span>
                <span>{selectedIndex + 1} / {visiblePhotographs.length}</span>
              </figcaption>
            </figure>
            <button type="button" className="gallery-next" aria-label="Photographie suivante" onClick={() => navigate(1)}>
              <Icon name="chevron-right" />
            </button>
          </div>
        )}
      </dialog>
    </section>
  );
}
