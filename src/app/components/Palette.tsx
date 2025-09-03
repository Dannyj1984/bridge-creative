'use client';

import { useState, useEffect } from 'react';
import { projects } from '../data/projects';

// Design Playground Component
function DesignPlayground() {
  const [selectedFont, setSelectedFont] = useState('Inter');
  const [primaryColor, setPrimaryColor] = useState('#3B82F6');
  const [secondaryColor, setSecondaryColor] = useState('#EF4444');
  const [backgroundColor, setBackgroundColor] = useState('#F8FAFC');
  const [textColor, setTextColor] = useState('#1F2937');

  const fonts = [
    'Inter',
    'Roboto',
    'Playfair Display',
    'Montserrat',
    'Open Sans',
    'Poppins',
    'Lora',
    'Oswald'
  ];

  const presetColors = [
    '#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6',
    '#EC4899', '#06B6D4', '#84CC16', '#F97316', '#6366F1'
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
      {/* Controls Panel */}
      <div className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Font Family</label>
          <select
            value={selectedFont}
            onChange={(e) => setSelectedFont(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            {fonts.map(font => (
              <option key={font} value={font} style={{ fontFamily: font }}>
                {font}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Primary Color</label>
          <div className="flex gap-2 mb-2">
            {presetColors.map(color => (
              <button
                key={color}
                onClick={() => setPrimaryColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${primaryColor === color ? 'border-gray-800' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <input
            type="color"
            value={primaryColor}
            onChange={(e) => setPrimaryColor(e.target.value)}
            className="w-full h-10 rounded-lg border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Secondary Color</label>
          <div className="flex gap-2 mb-2">
            {presetColors.map(color => (
              <button
                key={color}
                onClick={() => setSecondaryColor(color)}
                className={`w-8 h-8 rounded-full border-2 ${secondaryColor === color ? 'border-gray-800' : 'border-gray-300'}`}
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
          <input
            type="color"
            value={secondaryColor}
            onChange={(e) => setSecondaryColor(e.target.value)}
            className="w-full h-10 rounded-lg border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
          <input
            type="color"
            value={backgroundColor}
            onChange={(e) => setBackgroundColor(e.target.value)}
            className="w-full h-10 rounded-lg border border-gray-300"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
          <input
            type="color"
            value={textColor}
            onChange={(e) => setTextColor(e.target.value)}
            className="w-full h-10 rounded-lg border border-gray-300"
          />
        </div>
      </div>

      {/* Live Design Preview */}
      <div 
        className="rounded-lg p-8 min-h-[500px] shadow-inner"
        style={{ 
          backgroundColor: backgroundColor,
          fontFamily: selectedFont,
          color: textColor
        }}
      >
        <div className="space-y-6">
          <div 
            className="inline-block px-6 py-3 rounded-lg text-white font-semibold"
            style={{ backgroundColor: primaryColor }}
          >
            Get Started
          </div>

          <h1 className="text-4xl font-bold leading-tight">
            Your Creative
            <span 
              className="block"
              style={{ color: primaryColor }}
            >
              Vision Realized
            </span>
          </h1>

          <p className="text-lg opacity-80 max-w-md">
            Transform your ideas into stunning visual experiences that captivate and inspire your audience.
          </p>

          <div className="flex gap-4">
            <button 
              className="px-6 py-3 rounded-lg font-medium transition-colors"
              style={{ 
                backgroundColor: primaryColor,
                color: 'white'
              }}
            >
              Primary Action
            </button>
            <button 
              className="px-6 py-3 rounded-lg font-medium border-2 transition-colors"
              style={{ 
                borderColor: secondaryColor,
                color: secondaryColor
              }}
            >
              Secondary Action
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 mt-8">
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: `${primaryColor}20` }}
            >
              <h3 className="font-semibold mb-2" style={{ color: primaryColor }}>
                Feature One
              </h3>
              <p className="text-sm opacity-75">
                Showcase your best work with stunning visual presentations.
              </p>
            </div>
            <div 
              className="p-4 rounded-lg"
              style={{ backgroundColor: `${secondaryColor}20` }}
            >
              <h3 className="font-semibold mb-2" style={{ color: secondaryColor }}>
                Feature Two
              </h3>
              <p className="text-sm opacity-75">
                Engage clients with interactive design experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const projectPalettes: Record<number, string[]> = {
  1: ['#2C5F2D', '#97BC62', '#FFFFFF', '#F8F8F8', '#4A4A4A'], // Sutton Healthcare
  2: ['#E31E24', '#FFFFFF', '#1A1A1A', '#F5F5F5', '#808080'], // Community Netball League
  4: ['#FF6B35', '#F7931E', '#FFD23F', '#FFFFFF', '#2C2C2C'], // AW Logistics
};

const defaultPalette = ['#3B82F6', '#EF4444', '#10B981', '#F59E0B', '#8B5CF6'];

interface ColourPalette {
  id: string;
  title: string;
  colours: string[];
  image: string;
}

export default function PalettePage() {
  const [selectedPalette, setSelectedPalette] = useState<ColourPalette | null>(null);
  const [copiedColour, setCopiedColour] = useState<string | null>(null);

  const palettes: ColourPalette[] = projects.map(project => ({
    id: project.id.toString(),
    title: project.title,
    colours: projectPalettes[project.id] || defaultPalette,
    image: project.image
  }));

  const copyToClipboard = async (colour: string) => {
    try {
      await navigator.clipboard.writeText(colour);
      setCopiedColour(colour);
      setTimeout(() => setCopiedColour(null), 2000);
    } catch (err) {
      console.error('Failed to copy colour:', err);
    }
  };

  const hslToHex = (h: number, s: number, l: number): string => {
    l /= 100;
    const a = s * Math.min(l, 1 - l) / 100;
    const f = (n: number) => {
      const k = (n + h / 30) % 12;
      const colour = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
      return Math.round(255 * colour).toString(16).padStart(2, '0');
    };
    return `#${f(0)}${f(8)}${f(4)}`;
  };

  const generateRandomPalette = () => {
    const colours = [];
    for (let i = 0; i < 5; i++) {
      const hue = Math.floor(Math.random() * 360);
      const saturation = Math.floor(Math.random() * 50) + 50;
      const lightness = Math.floor(Math.random() * 40) + 30;
      const hexColour = hslToHex(hue, saturation, lightness);
      colours.push(hexColour);
    }
    
    setSelectedPalette({
      id: 'random',
      title: 'Random Inspiration',
      colours,
      image: ''
    });
  };

  return (
    <div className="min-h-screen pt-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 pb-20">
        {/* Design Playground Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Design Playground</h2>
          <p className="text-center text-gray-600 mb-8">Experiment with fonts and colours on a live design</p>
          
          <DesignPlayground />
        </div>
        <div className="text-center my-12">
          <h1 className="text-4xl font-bold mb-4">Colour Palettes</h1>
          <p className="text-xl text-gray-600 mb-8">
            Explore the colour stories behind each project
          </p>
          <button
            onClick={generateRandomPalette}
            className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Generate Random Palette
          </button>
        </div>

        {/* Selected Palette Display */}
        {selectedPalette && (
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold mb-6 text-center">{selectedPalette.title}</h2>
            <div className="flex flex-wrap justify-center gap-4">
              {selectedPalette.colours.map((colour, index) => (
                <div key={index} className="text-center">
                  <div
                    className="w-24 h-24 rounded-lg shadow-md cursor-pointer hover:scale-105 transition-transform"
                    style={{ backgroundColor: colour }}
                    onClick={() => copyToClipboard(colour)}
                    title={`Click to copy ${colour}`}
                  />
                  <p className="mt-2 text-sm font-mono text-gray-700">{colour}</p>
                  {copiedColour === colour && (
                    <p className="text-xs text-green-600 mt-1">Copied!</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Palettes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {palettes.map((palette) => (
            <div
              key={palette.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-shadow"
              onClick={() => setSelectedPalette(palette)}
            >
              <div className="h-48 bg-gray-200 relative">
                <img
                  src={palette.image}
                  alt={palette.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold mb-4">{palette.title}</h3>
                <div className="flex gap-2">
                  {palette.colours.map((colour, index) => (
                    <div
                      key={index}
                      className="w-8 h-8 rounded-full shadow-sm"
                      style={{ backgroundColor: colour }}
                      title={colour}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        

        {/* Colour Theory Section */}
        <div className="mt-20 bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-6 text-center">Colour Inspiration</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-yellow-500 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Warm Palettes</h3>
              <p className="text-gray-600 text-sm">Energetic and inviting colours that create warmth and excitement</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-green-500 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Cool Palettes</h3>
              <p className="text-gray-600 text-sm">Calming and professional colours that inspire trust and tranquility</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4"></div>
              <h3 className="font-semibold mb-2">Creative Palettes</h3>
              <p className="text-gray-600 text-sm">Bold and unique combinations that stand out and inspire creativity</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
