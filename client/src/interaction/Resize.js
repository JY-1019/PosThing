import React from "react";
import registDragEvent from "./Drag";
import { inrange } from "../utils/index";
import { MIN_W, MIN_H, BOUNDARY_MARGIN } from "../config";

export default function Resize({ props }) {
  const { x, y, w, h, setPosition } = props;
  return (
    <React.Fragment>
      {/* 좌상단 */}
      <div
        className="absolute w-4 h-4 -top-1 -left-1 cursor-nw-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((deltaX, deltaY) => {
          // 3️⃣
          setPosition({
            x: inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W),
            y: inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H),
            w: inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN),
            h: inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
          });
        }, true)}
      />
      {/* 우상단 */}
      <div
        className="absolute w-4 h-4 -top-1 -right-1 cursor-ne-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((deltaX, deltaY) => {
          setPosition({
            x,
            y: inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H),
            w: inrange(
              w + deltaX,
              MIN_W,
              window.innerWidth - x - BOUNDARY_MARGIN
            ),
            h: inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
          });
        }, true)}
      />
      {/* 좌하단 */}
      <div
        className="absolute w-4 h-4 -bottom-1 -left-1 cursor-ne-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((deltaX, deltaY) => {
          setPosition({
            x: inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W),
            y,
            w: inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN),
            h: inrange(
              h + deltaY,
              MIN_H,
              window.innerHeight - y - BOUNDARY_MARGIN
            ),
          });
        }, true)}
      />
      {/* 우하단 */}
      <div
        className="absolute w-4 h-4 -bottom-1 -right-1 cursor-se-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((deltaX, deltaY) => {
          setPosition({
            x,
            y,
            w: inrange(
              w + deltaX,
              MIN_W,
              window.innerWidth - x - BOUNDARY_MARGIN
            ),
            h: inrange(
              h + deltaY,
              MIN_H,
              window.innerHeight - y - BOUNDARY_MARGIN
            ),
          });
        }, true)}
      />
      {/* 상단 */}
      <div
        className="absolute -top-0.5 left-3 right-3 h-2 cursor-n-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((_, deltaY) => {
          setPosition({
            x,
            y: inrange(y + deltaY, BOUNDARY_MARGIN, y + h - MIN_H),
            w,
            h: inrange(h - deltaY, MIN_H, y + h - BOUNDARY_MARGIN),
          });
        }, true)}
      />
      {/* 하단 */}
      <div
        className="absolute -bottom-0.5 left-3 right-3 h-2 cursor-s-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((_, deltaY) => {
          setPosition({
            x,
            y,
            w,
            h: inrange(
              h + deltaY,
              MIN_H,
              window.innerHeight - y - BOUNDARY_MARGIN
            ),
          });
        }, true)}
      />
      {/* 우측 */}
      <div
        className="absolute bottom-3 top-3 -right-0.5 w-2 cursor-e-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((deltaX) => {
          setPosition({
            x,
            y,
            w: inrange(
              w + deltaX,
              MIN_W,
              window.innerWidth - x - BOUNDARY_MARGIN
            ),
            h,
          });
        }, true)}
      />
      {/* 좌측 */}
      <div
        className="absolute bottom-3 top-3 -left-0.5 w-2 cursor-w-resize"
        style={{ backgroundColor: "transparent" }}
        {...registDragEvent((deltaX) => {
          setPosition({
            x: inrange(x + deltaX, BOUNDARY_MARGIN, x + w - MIN_W),
            y,
            w: inrange(w - deltaX, MIN_W, x + w - BOUNDARY_MARGIN),
            h,
          });
        }, true)}
      />
    </React.Fragment>
  );
}
