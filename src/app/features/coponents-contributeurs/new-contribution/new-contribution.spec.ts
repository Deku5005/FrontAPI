import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewContribution } from './new-contribution';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { FileUploadService } from './file-upload.service';
import { FormsModule } from '@angular/forms';

describe('NewContribution', () => {
  let component: NewContribution;
  let fixture: ComponentFixture<NewContribution>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsModule],
      providers: [
        provideHttpClient(),
        provideRouter([]),
        FileUploadService
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(NewContribution);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize with default values', () => {
    expect(component.contributionType).toBe('file');
    expect(component.contribution.featureId).toBe('');
    expect(component.contribution.description).toBe('');
    expect(component.contribution.fichier).toBeNull();
    expect(component.contribution.lien).toBe('');
  });

  it('should switch between file and link contribution types', () => {
    expect(component.contributionType).toBe('file');

    component.contributionType = 'link';
    fixture.detectChanges();

    expect(component.contributionType).toBe('link');
    expect(component.contribution.fichier).toBeNull();
  });

  it('should validate form correctly', () => {
    // Test avec type fichier
    component.contributionType = 'file';
    component.contribution.featureId = '1';
    component.contribution.description = 'Test description';
    component.contribution.fichier = new File([''], 'test.pdf');
    expect(component.isFormValid()).toBeTrue();

    // Test avec type lien
    component.contributionType = 'link';
    component.contribution.featureId = '1';
    component.contribution.description = 'Test description';
    component.contribution.lien = 'https://example.com';
    expect(component.isFormValid()).toBeTrue();
  });

  it('should handle file selection', () => {
    const mockFile = new File([''], 'test.pdf', { type: 'application/pdf' });
    const event = {
      target: {
        files: [mockFile]
      }
    } as unknown as Event;

    component.onFileSelected(event);
    expect(component.contribution.fichier).toEqual(mockFile);
  });

  it('should reset link when switching to file type', () => {
    component.contribution.lien = 'https://test.com';
    component.resetLink();
    expect(component.contribution.lien).toBe('');
  });

  it('should reset file when switching to link type', () => {
    component.contribution.fichier = new File([''], 'test.pdf');
    component.resetFile();
    expect(component.contribution.fichier).toBeNull();
  });
});
