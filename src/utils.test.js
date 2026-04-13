import { describe, it, expect, beforeEach } from 'vitest';
import { validatePostcode, showLoading, hideLoading } from './utils.js';

describe('validatePostcode', () => {
  beforeEach(() => {
    document.body.innerHTML = `
      <div id="error"></div>
      <div id="loading" style="display:none"></div>
    `;
  });

  it('returns false for an empty postcode', () => {
    expect(validatePostcode('')).toBe(false);
  });

  it('returns true for a valid London postcode', () => {
    expect(validatePostcode('SW1A 1AA')).toBe(true);
  });

  it('returns false for an invalid postcode', () => {
    expect(validatePostcode('ABC123')).toBe(false);
  });

  it('shows an error message for an empty postcode', () => {
    validatePostcode('');
    expect(document.getElementById('error').textContent).not.toBe('');
  });

  it('clears the error message for a valid postcode', () => {
    document.getElementById('error').textContent = 'Previous error';
    validatePostcode('SW1A 1AA');
    expect(document.getElementById('error').textContent).toBe('');
  });
});

describe('loading helpers', () => {
  beforeEach(() => {
    document.body.innerHTML = `<div id="loading" style="display:none"></div>`;
  });

  it('shows the loading indicator', () => {
    showLoading();
    expect(document.getElementById('loading').style.display).toBe('block');
  });

  it('hides the loading indicator', () => {
    hideLoading();
    expect(document.getElementById('loading').style.display).toBe('none');
  });
});
