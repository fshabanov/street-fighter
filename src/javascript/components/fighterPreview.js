import { createElement } from '../helpers/domHelper';

export function createFighterPreview(fighter, position) {
  const positionClassName = position === 'right' ? 'fighter-preview___right' : 'fighter-preview___left';
  const fighterElement = createElement({
    tagName: 'div',
    className: `fighter-preview___root ${positionClassName}`
  });

  // todo: show fighter info (image, name, health, etc.)
  if (fighter) {
    const fighterImage = createFighterImage(fighter);
    const fighterData = createFighterInfo(fighter);

    fighterElement.appendChild(fighterImage);
    fighterElement.appendChild(fighterData);
  }

  return fighterElement;
}

export function createFighterImage(fighter) {
  const { source, name } = fighter;
  const attributes = {
    src: source,
    title: name,
    alt: name
  };
  const imgElement = createElement({
    tagName: 'img',
    className: 'fighter-preview___img',
    attributes
  });

  return imgElement;
}

export function createFighterInfo(fighter) {
  const { name, health } = fighter;
  const infoElement = createElement({
    tagName: 'div',
    className: 'fighter-preview___info'
  });

  const nameElement = createElement({
    tagName: 'h3',
    className: 'fighter-preview___name',
    text: name
  });

  const healthElement = createElement({
    tagName: 'p',
    className: 'fighter-preview___health',
    text: `Health: ${health}`
  });

  infoElement.appendChild(nameElement);
  infoElement.appendChild(healthElement);
  return infoElement;
}
