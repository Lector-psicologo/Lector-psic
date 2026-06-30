/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  details: string[];
  icon: string; // Lucide icon name
  category: 'individual' | 'empresarial';
  price?: string;
}

export interface SectorItem {
  id: string;
  name: string;
  icon: string;
}

export interface VideoItem {
  id: string;
  title: string;
  description: string;
  youtubeId: string;
  thumbnailUrl: string;
  href?: string;
}

export interface TestimonialItem {
  id: string;
  quote: string;
  author: string;
  role: string;
}
