"use client"

import { Component, ReactNode } from "react";

interface IErrorBoundaryProps {
    fallback: ReactNode;
    children: ReactNode;
}
interface IErrorBoundaryState {
    hasError: boolean;
}

export default class ErrorBoundary extends Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor(props:IErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(error: any) {
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}
