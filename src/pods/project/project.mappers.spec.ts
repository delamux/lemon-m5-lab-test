import { mapProjectFromApiToVm } from './project.mapper';
import * as apiModel from './api/project.api-model';
import * as viewModel from './project.vm';

describe('./pods/project/project.mappers', () => {
  it('should return empty project when feeding null value', () => {
    // Arrange
    const project = null;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return empty project when feeding undefined value', () => {
    // Arrange
    const project = undefined;

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(viewModel.createEmptyProject());
  });

  it('should return expected result but feeding undefined employee list', () => {
    const project: apiModel.Project = {
      id: '123',
      name: 'Luis',
      externalId: 'x123',
      comments: 'developer',
      isActive: true,
      employees: undefined,
    };

    const expectedProject: apiModel.Project = {
      id: '123',
      name: 'Luis',
      externalId: 'x123',
      comments: 'developer',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedProject);
  });

  it('should return expected result but feeding null employee list', () => {
    const project: apiModel.Project = {
      id: '123',
      name: 'Luis',
      externalId: 'x123',
      comments: 'developer',
      isActive: true,
      employees: null,
    };

    const expectedProject: apiModel.Project = {
      id: '123',
      name: 'Luis',
      externalId: 'x123',
      comments: 'developer',
      isActive: true,
      employees: [],
    };

    // Act
    const result = mapProjectFromApiToVm(project);

    // Assert
    expect(result).toEqual(expectedProject);
  });
});
